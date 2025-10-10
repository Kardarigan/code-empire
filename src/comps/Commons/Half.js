import { Link } from "react-router-dom";
import { Bullet, Loaded_Animation } from "../Portal";

const Half = ({ thing, reverse = false, bg = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section ref={ref} className={`padding-y ${bg ? "bg-blue-50" : ""}`}>
      <div
        className={`flex flex-col-reverse container padding-x mo ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="lg:w-1/2 flex-fullcenter z-10">
          <div className={reverse ? "" : "lg:text-end"}>
            <h3 className="lg:text-7xl text-2xl font-bold relative">
              <Bullet customClass="title-lg lg:hidden drop-shadow-xl" />
              <span
                className={`lg:absolute max-lg:halfbg-left whitespace-nowrap ${
                  reverse
                    ? "lg:left-0 lg:halfbg-right"
                    : "right-0 lg:halfbg-left"
                } translate-y-[20%]`}
              >
                {thing.title}
              </span>
            </h3>
            <p className="lg:mt-36 my-5 para max-w-[500px]">{thing.describe}</p>
            <Link to="/courses" className="button button-dark">
              مشاهده‌ی کلاس ها
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className={`lg:p-12 flex-fullcenter ${className}`}>
            {thing.cover?.endsWith(".mp4") || thing.cover?.endsWith(".webm") ? (
              <video
                autoPlay
                muted
                loop
                className="bg-fullobject rounded-3xl ghost w-full"
              >
                <source
                  src={thing.cover}
                  type={`video/${thing.cover.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            ) : thing.icon ? (
              <i className={thing.icon + " lg:text-[300px] text-[100px]"} />
            ) : (
              <img
                src={thing.cover}
                alt={thing.title}
                className="w-full bg-fullobject rounded-3xl ghost"
              />
            )}
          </div>

          <span
            className={`absolute max-lg:hidden ${
              reverse ? "" : "left-0"
            } translate-y-[-150%] hover:rotate-180 transition-all`}
          >
            <Bullet customClass="lg:text-9xl" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Half;
