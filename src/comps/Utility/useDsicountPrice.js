import { useMemo } from "react";

export const useDsicountPrice = (price, options = {}) => {
  const { minPrice = 2000000, discountPercent = 10 } = options;

  return useMemo(() => {
    const discountedPrice = price - (price * discountPercent) / 100;
    const discount = price <= minPrice ? 0 : discountPercent;
    return {
      originalPrice: price,
      discountedPrice,
      discountPercent: discount,
    };
  }, [price, minPrice, discountPercent]);
};
