export default function Price_Display({ price, originalPrice, discount = 0 }) {
  const formatPrice = (p) =>
    p ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;

  return (
    <>
      {discount > 0 && (
        <div className="absolute -translate-y-3 text-xs">
          <span className="px-2 pt-1 rounded-md text-slate-100 bg-blue-500 ring-slate-200 ring-1 text-[10px] ms-2">
            {discount}%
          </span>
          <del className="opacity-50">{formatPrice(originalPrice)}</del>
        </div>
      )}
      <span>{formatPrice(price)}</span>
    </>
  );
}
