import {
  Home_Hero,
  Half,
  Popular_Courses,
  Instagram,
  Infobox,
  Breadcrumb,
  Courses_Section,
  Magazin,
  Carousel_Title,
} from "../comps/Portal";
import { home } from "../data/Constants";
import { courseBenefits, courses } from "../data/Courses";

const Home = () => {
  const slicedCourses = courses.slice(-6);

  return (
    <>
      <Home_Hero />
      <Breadcrumb />
      <Courses_Section
        course={{ title: "تازه‌ترین کلاس ها", courses: slicedCourses }}
      />
      <Popular_Courses />
      <Half thing={home.newWays} bg />
      <Infobox thing={courseBenefits} />
      <Half thing={home.whatWeAre} reverse bg />
      <Instagram />
      <Magazin />
    </>
  );
};

export default Home;
