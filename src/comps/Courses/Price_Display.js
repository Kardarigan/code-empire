import React from "react";

export default function Price_Display({ price, discount = false }) {
  const formatPrice = (price) => {
    const formattedPrice = price
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;
    return formattedPrice;
  };

  let totalPrice = formatPrice(price);
  if (discount === false) return totalPrice;

  const totalDiscount = price * (discount * 0.01);
  let discountPrice = price - totalDiscount;
  discountPrice = formatPrice(discountPrice);

  return (
    <>
      <div className="absolute -translate-y-3 text-xs">
        <span className="px-2 pt-1 rounded-md text-slate-100 bg-blue-500">
          {discount}%
        </span>
        <del className="opacity-50">{totalPrice}</del>
      </div>
      <span>{discountPrice}</span>
    </>
  );
}
