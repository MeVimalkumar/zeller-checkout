import { PricingRule } from "./types";

export const applyTVDiscount: PricingRule = (items, products) => {
  const count = items.get('atv') || 0;
  const product = products.getProduct('atv');
  if (!product) return 0;
  return Math.floor(count / 3) * 2 * product.price + (count % 3) * product.price;
}

export const superIpadBulkDiscount: PricingRule = (items, products) => {
  const count = items.get('ipd') || 0;
  const product = products.getProduct('ipd');
  if (!product) return 0;

  const price = count > 4 ? 499.99 : product.price;
  return count * price
}

export const defaultPricing: PricingRule = (items, products) => {
  return Array.from(items.entries())
    .filter(([sku]) => sku !== 'atv' && sku !== 'ipd')
    .reduce((total, [sku, count]) => total + count * (products.getProduct(sku)?.price || 0), 0)
}