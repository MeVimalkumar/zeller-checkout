import { ProductCatalog } from "./product";


export type PricingRule = (item: Map<string, number>, products: ProductCatalog) => number;

