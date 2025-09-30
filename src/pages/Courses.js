import {
  All_Courses,
  Breadcrumb,
  Infobox,
  // Courses_News,
  FAQ,
  Hero,
  Learners_Rank,
} from "../comps/Portal";
import { courseBenefits, coursesQuestions } from "../data/Courses";

const Courses = () => {
  return (
    <>
      <Hero title="کلاس های امپراتوری" />
      <Breadcrumb />
      <All_Courses />
      <Learners_Rank />
      <Infobox thing={courseBenefits} />
      <FAQ questions={coursesQuestions} className="case" />
    </>
  );
};

export default Courses;
