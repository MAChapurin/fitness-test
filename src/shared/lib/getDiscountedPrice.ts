export function getDiscountedPrice(
  originalPrice: number,
  discount: number
): number {
  if (discount <= 0) return originalPrice;
  if (discount >= 100) return 0;

  const discountedPrice = originalPrice * (1 - discount / 100);
  return Math.round(discountedPrice);
}
