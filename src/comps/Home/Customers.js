import { customerReviews } from "../../data/Constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Customers = () => {
  return (
    <section className="padding-x py-10 text-center">
      <h2 className="title-lg mac-bg">چیزی که دیگران دربارمون میگن</h2>
      <div dir="ltr" className="mt-10">
        <Splide
          aria-label="Customers Slider"
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            pagination: false,
            gap: "2em",
            perPage: 3,
            breakpoints: {
              1200: {
                perPage: 1,
              },
            },
            focus: "center",
          }}
        >
          {customerReviews.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="size-full card">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 me-8 max-md:hidden"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="text-start">
                      <h3>
                        {item.name}
                        <span className="mx-2 font-thin">/</span>
                        <span className="text-slate-300 text-[10px]">
                          {item.job}
                        </span>
                      </h3>
                      <hr className="my-2 opacity-30" />
                      <p className="text-xs text-justify mt-3">{item.review}</p>
                    </div>
                    <p className="text-slate-200 md:text-[10px] text-[8px] text-end mt-2">
                      آخرین همکاری : {item.lastCooperation}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Customers;
