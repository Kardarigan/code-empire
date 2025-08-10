import { useMemo } from "react";

export default function useDiscountPrice(price, discount) {
  const hasDiscount = discount > 0;

  const discountedPrice = useMemo(() => {
    return +(price - (price * discount) / 100).toFixed(2);
  }, [price, discount, hasDiscount]);

  return discountedPrice;
}
