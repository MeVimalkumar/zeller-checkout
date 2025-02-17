import { Checkout } from "./checkout";
import { applyTVDiscount, defaultPricing, superIpadBulkDiscount } from "./pricing-rules";
import { ProductCatalog } from "./product";

const productCatalog = new ProductCatalog();
const checkout = new Checkout([applyTVDiscount, superIpadBulkDiscount, defaultPricing], productCatalog);

checkout.scan('atv');
checkout.scan('atv');
checkout.scan('atv');
checkout.scan('vga');

console.log(`Total: $${checkout.total()}`);