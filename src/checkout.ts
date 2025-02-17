import { ProductCatalog } from "./product";
import { PricingRule } from "./types";


export class Checkout {
  private pricingRules: PricingRule[];
  private items: Map<string, number>;
  private products: ProductCatalog;

  constructor(pricingRules: PricingRule[], productCatalog: ProductCatalog) {
    this.pricingRules = pricingRules;
    this.items = new Map();
    this.products = productCatalog;
  }

  scan(sku: string): void {
    const product = this.products.getProduct(sku);
    if (!product) throw new Error(`invalid product sku: ${sku}`);
    this.items.set(sku, (this.items.get(sku) || 0) + 1);
  }

  total(): number {
    let totalPrice = 0;

    for (const rule of this.pricingRules) {
      totalPrice += rule(this.items, this.products);
    }

    return totalPrice;
  }
}

