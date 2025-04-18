import { courses } from "../../data/Courses";
import { Courses_Section, Tip } from "../Portal";

const All_Courses = () => {
  const categoryFilter = (categoryName) => {
    return courses.filter((e) => e.category === categoryName);
  };

  const courseWeb = categoryFilter("web");
  const courseSoftware = categoryFilter("software");
  const courseGame = categoryFilter("game");

  const theAllCourses = [
    {
      title: "کلاس های طراحی وبسایت",
      courses: courseWeb,
    },
    {
      title: "کلاس های برنامه نویسی",
      courses: courseSoftware,
    },
    {
      title: "کلاس های بازی سازی",
      courses: courseGame,
    },
  ];

  return (
    <>
      <section className="container padding-x mt-8">
        <Tip message={"کلاس‌ها با جدیدترین تکنولوژی‌ها به‌روز می‌شوند"} blue />
      </section>
      {theAllCourses.map((course, index) => {
        return <Courses_Section course={course} key={index} interval="1000" />;
      })}
    </>
  );
};

export default All_Courses;
