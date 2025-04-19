import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Course_Card = ({ thing }) => {
  const { ref, className } = Loaded_Animation();

  var formattedPrice = null;

  if (thing.publicLink) {
    formattedPrice = thing.price
      ? thing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;
  } else {
    formattedPrice = thing.privatePrice
      ? thing.privatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;
  }

  return (
    <Link
      ref={ref}
      to={"/courses/" + thing.path}
      className={`text-center rounded-lg relative transition-all duration-300 group hover:scale-105 ${className}`}
    >
      <div
        className="max-w-[90%] w-full absolute right-[5%] rounded-3xl"
        style={{
          backgroundColor: thing.color[0],
          background: `linear-gradient(0deg, ${thing.color[0]} 0%, ${thing.color[1]} 100%)`,
        }}
      >
        <div className="flex-fullcenter pt-5 pb-1">
          {thing.title === "HTML,CSS" && (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt={thing.title + " logo"}
              className="center-obj max-w-20 w-1/4"
            />
          )}
          <img
            src={thing.logo}
            alt={thing.title + " logo"}
            className="center-obj object-contain max-w-20 w-1/4 sm:min-h-20"
          />
        </div>
        <div className="text-slate-50 relative pb-5">
          <h2 className="title">{thing.title}</h2>
          <h2 className="font-medium">{thing.persianTitle}</h2>
        </div>
        <h4 className="absolute para-sm left-2 top-2 bg-opacity-40 px-2 pt-1 pb-1 bg-slate-200 rounded-full">
          <i className="fas fa-user me-1" />
          {thing.specs[0].describe}
        </h4>
      </div>
      <div className="mac-border mt-12 md:pt-36 pt-32 md:pb-5 pb-3 text-start">
        <h2 className="title-sm line-clamp-1 text-ellipsis">
          {thing.fullTitle}
        </h2>
        <p className="line-clamp-2 text-ellipsis text-sm mt-3">
          {thing.paragraphs[0].paragraph[0]}
        </p>
        <div className="md:mt-12 mt-3 flex-seperate">
          <h6 className="max-sm:text-xs">
            <span className="text-blue-600 flex items-center">
              <i
                className={`fas ${
                  thing.publicLink ? "fa-users" : "fa-user"
                } sm:size-7 size-6 flex-fullcenter me-1 bg-blue-100 rounded-full`}
              ></i>{" "}
              {thing.publicLink ? "گروهی و خصوصی" : "خصوصی"}
            </span>
          </h6>
          <div className="flex relative">
            <h3 className="md:text-2xl sm:text-xl text-lg  font-sans font-extrabold me-[15px]">
              {formattedPrice}
            </h3>
            <span className="absolute text-[10px] left-0 top-0 bottom-0 -rotate-90 max-sm:text-[10px]">
              تومان
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;
