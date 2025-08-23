import { useMemo } from "react";

export const useDsicountPrice = (price, options = {}) => {
  const { minPrice = 2000000, discountPercent = 10 } = options;

  return useMemo(() => {
    if (price <= minPrice) {
      return {
        originalPrice: price,
        discountedPrice: price,
        discountPercent: 0,
      };
    }

    const discountedPrice = price - (price * discountPercent) / 100;

    return {
      originalPrice: price,
      discountedPrice,
      discountPercent,
    };
  }, [price, minPrice, discountPercent]);
};
