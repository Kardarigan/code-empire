import React from "react";

const formatPrice = (price) => {
  const formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;
  return formatPrice;
};

export default function Price_Display({ price, discount = false }) {
  let totalPrice = formatPrice(price);
  if (discount === false) return totalPrice;

  const totalDiscount = price * (discount * 0.01);
  const discountPrice = totalPrice - totalDiscount;

  return <span>{totalPrice}</span>;
}
