export function formatPriceThreshold(value: number): string {
  if (value <= 9999) {
    return value.toString();
  }

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
