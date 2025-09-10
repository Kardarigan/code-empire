import { useMemo } from "react";

export const useDsicountPrice = (price, options = {}) => {
  const { minPrice = 2000000, discountPercent = 10 } = options;
  const thePrice = price; // Math.round((price + (price * 20) / 100) / 1000) * 1000;

  return useMemo(() => {
    return {
      originalPrice: thePrice,
      discountedPrice: thePrice,
      discountPercent: 0,
    };

    const discountedPrice = thePrice - (thePrice * discountPercent) / 100;

    return {
      originalPrice: thePrice,
      discountedPrice,
      discountPercent,
    };
  }, [thePrice, minPrice, discountPercent]);
};
