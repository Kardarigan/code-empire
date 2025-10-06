import { Link } from "react-router-dom";
import { Loaded_Animation } from "../Portal";

const Stand = ({ thing, index }) => {
  const heights = ["md:h-60 h-40", "md:h-72 h-52", "md:h-64 h-44"];
  const { ref, className } = Loaded_Animation("h-24", heights[index]);
  const path = "/courses/" + thing.path;

  var firstTitleWord =
    thing.title === "Total Web" ? "Total Web" : thing.title.split(" ")[0];

  return (
    <div className="w-1/3 flex flex-col justify-end md:h-80 h-60">
      <div ref={ref} className={`stand ${className}`}>
        <Link
          to={path}
          className="text-center text-slate-100 translate-y-[-20%] md:py-8 pb-7 pt-4 block lg:mx-8 md:mx-3 mx-2 rounded-t-3xl"
          style={{
            backgroundColor: thing.color[0],
            background: `-webkit-linear-gradient(0deg, ${thing.color[0]} 0%, ${thing.color[1]} 100%)`,
          }}
        >
          <h2
            className="md:text-3xl text-lg font-extrabold drop-shadow-2xl line-clamp-1"
            dir="ltr"
          >
            {firstTitleWord}
          </h2>
          <h2 className="para text-center">{thing.persianTitle}</h2>
        </Link>
        <div className="stand-column" />
      </div>
    </div>
  );
};

export default Stand;
