import React from "react";

export default function Price_Display({
  price,
  originalPrice,
  discount = false,
}) {
  const formatPrice = (p) =>
    p ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;

  return (
    <>
      {discount && (
        <div className="absolute -translate-y-3 text-xs">
          <span className="px-2 pt-1 rounded-md text-slate-100 bg-blue-500 text-[10px] ms-2">
            {discount}%
          </span>
          <del className="opacity-50">{formatPrice(originalPrice)}</del>
        </div>
      )}
      <span>{formatPrice(price)}</span>
    </>
  );
}
