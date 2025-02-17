import { beforeEach, describe, expect, test } from "@jest/globals";
import { Checkout } from "../src/checkout";
import { applyTVDiscount, defaultPricing, superIpadBulkDiscount } from "../src/pricing-rules";
import { ProductCatalog } from "../src/product";

describe('Checkout System', () => {
  let co: Checkout;
  const productCatalog = new ProductCatalog();

  beforeEach(() => {
    co = new Checkout([applyTVDiscount, superIpadBulkDiscount, defaultPricing], productCatalog);
  });

  test('SKUs Scanned: atv, atv, atv, vga Total expected: $249.00', () => {
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).toBe(249.00);
  });

  test('SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95', () => {
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    console.log(co.total())
    expect(co.total()).toBe(2718.95);
  });
})