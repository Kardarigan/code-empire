import { courses } from "../../data/Courses";
import { Stand } from "../Portal";

const Popular_Courses = () => {
  const filteredCourses = courses.filter((course) => course.rank < 4);

  filteredCourses.sort((a, b) => a.rank - b.rank);

  const reorderedCourses = [
    filteredCourses[1],
    filteredCourses[0],
    filteredCourses[2],
  ];

  return (
    <section className="case text-center">
      <h3 className="title-lg mac-bg">محبوبترین کلاس ها</h3>
      <div className="mt-12 md:pb-[80px] pb-[40px]">
        <div className="flex md:gap-x-12">
          {reorderedCourses.map((item, index) => {
            return <Stand thing={item} index={index} key={index} />;
          })}
        </div>
        <div className="stand-found"></div>
      </div>
    </section>
  );
};

export default Popular_Courses;
