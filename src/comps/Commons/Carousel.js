import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Carousel = ({ type, things, options, interval = "2000" }) => {
  return (
    <Splide aria-label="infantry-class-slider" dir="ltr" options={options}>
      {Array.isArray(things) &&
        things.map((item, index) => {
          return (
            <SplideSlide key={index} data-splide-interval={interval}>
              {type === "company" ? (
                <a href={item.href}>
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="size-full h-32 object-contain"
                  />
                </a>
              ) : type === "review" ? (
                <div className="size-full card py-5" dir="rtl">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-end gap-x-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="size-20 max-md:hidden"
                        />
                        <h3 className="text-start text-lg">
                          {item.name} <br />
                          <span className="text-slate-300 text-[10px]">
                            {item.job}
                          </span>
                        </h3>
                      </div>
                      <hr className="my-2 opacity-30" />
                      <p className="text-xs text-justify mt-3">{item.review}</p>
                    </div>

                    <p className="text-slate-200 md:text-[10px] text-[8px] text-end mt-2">
                      آخرین همکاری : {item.lastCooperation}
                    </p>
                  </div>
                </div>
              ) : type === "news" ? (
                <div>
                  <Link to={item.path}>
                    <img
                      src={item.cover}
                      alt="Event Banner"
                      className="w-full h-screen bg-fullobject"
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </SplideSlide>
          );
        })}
    </Splide>
  );
};

export default Carousel;
