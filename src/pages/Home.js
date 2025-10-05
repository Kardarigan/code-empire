import {
  Home_Hero,
  Half,
  Popular_Courses,
  Instagram,
  Infobox,
  Breadcrumb,
  Courses_Section,
  Magazin,
  Image_Section,
  Middle_Section,
} from "../comps/Portal";
import { cta, home } from "../data/Constants";
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
      <Image_Section thing={cta.instagram} />
      <Magazin />
      <Middle_Section thing={home.finalCta} />
    </>
  );
};

export default Home;
