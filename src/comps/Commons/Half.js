import { Link } from "react-router-dom";
import { Bullet, Loaded_Animation } from "../Portal";

const Half = ({ thing, reverse = false, bg = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section ref={ref} className={bg ? "bg-blue-50" : ""}>
      <div
        className={`flex flex-col-reverse container padding-x mo ${reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
      >
        <div className="md:w-1/2 flex-fullcenter z-10">
          <div className={reverse ? "" : "md:text-end"}>
            <h3 className="lg:text-7xl md:text-5xl text-2xl font-bold relative">
              <Bullet customClass="title-lg md:hidden" />
              <span
                className={`md:absolute max-md:halfbg-left text-nowrap ${reverse
                  ? "md:left-0 md:halfbg-right"
                  : "right-0 md:halfbg-left"
                  } translate-y-[20%] text-nowrap`}
              >
                {thing.title}
              </span>
            </h3>
            <p className="md:mt-36 my-5 para max-w-[500px]">{thing.describe}</p>
            <Link to="/courses" className="button button-dark">
              مشاهده‌ی کلاس ها
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className={`md:p-12 flex-fullcenter ${className}`}>
            {thing.cover?.endsWith(".mp4") || thing.cover?.endsWith(".webm") ? (
              <video autoPlay muted loop className="bg-fullobject rounded-3xl ghost w-full">
                <source
                  src={thing.cover}
                  type={`video/${thing.cover.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            ) : thing.icon ? (
              <i className={thing.icon + " md:text-[300px] text-[100px]"} />
            ) : (
              <img
                src={thing.cover}
                alt={thing.title}
                className="w-full bg-fullobject rounded-3xl ghost filter-blue"
              />
            )}
          </div>

          <span
            className={`absolute max-md:hidden ${reverse ? "" : "left-0"
              } translate-y-[-150%] hover:rotate-180 transition-all`}
          >
            <Bullet customClass="md:text-9xl" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Half;
