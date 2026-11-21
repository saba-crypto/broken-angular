import { Pipe, PipeTransform } from '@angular/core';

export function calcDiscountedPrice(price: number, discountPercent: number): number {
  const discounted = price * (1 - discountPercent / 100);
  return Math.round(discounted * 100) / 100;
}

@Pipe({ name: 'discountPrice' })
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercent: number): number {
    return calcDiscountedPrice(price, discountPercent);
  }
}
