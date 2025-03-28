import {
  All_Courses,
  Breadcrumb,
  Course_Benefits,
  Courses_News,
  FAQ,
  Hero,
  Learners_Rank,
} from "../comps/Portal";
import Cover from "../assets/courses.png";
import { coursesQuestions } from "../data/Courses";

const Courses = () => {
  return (
    <>
      {/* <Hero title="کلاس های امپراتوری" background={Cover} /> */}
      <Courses_News />
      <Breadcrumb />
      <All_Courses />
      <Learners_Rank />
      <Course_Benefits />
      <FAQ questions={coursesQuestions} className="case" />
    </>
  );
};

export default Courses;
