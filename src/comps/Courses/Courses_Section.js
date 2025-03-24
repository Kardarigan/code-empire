import { Link, useLocation } from "react-router-dom";
import { Course_Card } from "../Portal";

const Courses_Section = ({ course }) => {
  const location = useLocation().pathname;
  const isCoursePage = location.endsWith("/courses");

  return (
    <div className="case">
      <div className="flex-seperate">
        <h2 className="title">
          <i className="fa-solid fa-hashtag" />
          <span className="halfbg-left">{course.title}</span>
        </h2>
        {!isCoursePage && (
          <Link
            to="/courses"
            className="title-xs font-bold flex items-center gap-x-2 hover:opacity-70 transition-all"
          >
            <span>
              <span className="max-md:hidden">مشاهده </span>همه کلاس‌ها
            </span>
            <i className="fa-duotone fa-solid fa-sword rotate-[225deg]" />
          </Link>
        )}
      </div>
      <hr className="border-blue-500 my-5" />
      <div className="grid lg:grid-cols-3 gap-5">
        {course.courses.map((item, index) => {
          return <Course_Card thing={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Courses_Section;
