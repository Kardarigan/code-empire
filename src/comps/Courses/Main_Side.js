import { logo } from "../../data/Constants";

const Main_Side = ({
  details,
  specs,
  links,
  title,
  price = false,
  capacity = false,
  hint = false,
}) => {
  const formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  capacity = Number(capacity);
  const updatedDetails = [...details];

  if (
    price &&
    !updatedDetails.some((item) => item.label === "بهای کلاس گروهی")
  ) {
    updatedDetails.push({
      label: "بهای کلاس گروهی",
      describe: formattedPrice + " تومان",
    });
  }

  return (
    <aside className="md:col-span-2" id="sidebar">
      <div className="flex flex-col gap-y-3 max-md:h-[115%] sticky top-32">
        <section
          className={`py-3 mac-border text-slate-50 flex-seperate ${
            capacity === 0
              ? "border-red-500 bg-red-500 text-slate-50"
              : capacity < 10
              ? "border-yellow-400 bg-yellow-400 text-slate-900"
              : "text-slate-50 bg"
          }`}
        >
          <h5>ظرفیت کلاس :</h5>
          <h5>{capacity > 0 ? `${capacity} نفر` : "ظرفیت پر شد"}</h5>
        </section>
        <section className="flex-seperate gap-x-1 text-center text-slate-50">
          {specs.map((item, index) => {
            return (
              <div className="bg w-1/3 sm:py-5 py-4 rounded-3xl" key={index}>
                <i className={item.icon + " lg:text-lg"} />
                <h5 className="font-thin opacity-75 text-xs">{item.label}</h5>
                <h5 className="title-sm">{item.describe}</h5>
              </div>
            );
          })}
        </section>
        <section className="warn pt-2 pb-5">
          <h4 className="title flex items-center">
            <img
              src={logo.iconWhite}
              alt="Lotus Logo Icon"
              className="seze-icon"
            />
            مشخصات
          </h4>
          <ul className="grid gap-y-3 mt-5">
            {updatedDetails.map((item, index) => {
              return (
                <li
                  className="flex-seperate rounded-full bg-blue-500 px-5 py-1 para"
                  key={index}
                >
                  <h5 className="font-bold">{item.label} :</h5>
                  <h5>{item.describe}</h5>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex-seperate">
          {links.map((link, index) => {
            const privateLink = link.path + "#" + title;

            const handleClick = (link) => {
              if (capacity > 0) {
                if (link.label === "ثبت نام کلاس خصوصی") {
                  window.location.href = link.path;
                } else {
                  window.location.href = privateLink;
                }
              } else {
                alert("ظرفیت این کلاس فعلا پر شده! ولی نوبت تو هم میرسه😉");
              }
            };

            return (
              <button
                className={`py-4 button button-dark rounded-3xl ${
                  links.length > 1 ? "text-xs" : "w-full"
                }`}
                onClick={handleClick}
                key={index}
              >
                {link.label}
                <i
                  className={`fas ${
                    link.label === "ثبت نام کلاس خصوصی"
                      ? " fa-user"
                      : " fa-users"
                  } ms-2`}
                />
              </button>
            );
          })}
        </section>
        {hint && (
          <div className="flex items-center">
            <i className="fas fa-checkfa-duotone fa-regular fa-badge-percent me-1"></i>{" "}
            <p className="label">{hint}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Main_Side;
