import React from "react";

export default function Price_Display({ price, discount = false }) {
  const formatPrice = (price) => {
    const formattedPrice = price
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;
    return formattedPrice;
  };

  let totalPrice = formatPrice(price);
  if (discount === false) return totalPrice + " تومان";

  const totalDiscount = price * (discount * 0.01);
  const discountPrice = totalPrice - totalDiscount;

  return <span>{totalPrice} تومان</span>;
}
