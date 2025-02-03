import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { companies } from "../../data/Constants";

const Companies = () => {
  return (
    <section className="container padding text-center">
      <h3 className="title mb-10 mac-bg">
        دانش آموختگان ما در این شرکت ها مشغول به کارند
      </h3>
      <div dir="ltr" className="px-5">
        <Splide
          aria-label="Compaies Slider"
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            pagination: false,
            gap: "2em",
            perPage: 5,
            breakpoints: {
              768: {
                perPage: 4,
              },
              640: {
                perPage: 2,
              },
            },
            focus: "center",
          }}
        >
          {companies.map((item, index) => {
            return (
              <SplideSlide key={index} data-splide-interval="2000">
                <a href={item.href}>
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="size-full h-32 object-contain"
                  />
                </a>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Companies;
