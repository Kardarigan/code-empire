import {
  Home_Hero,
  Half,
  Popular_Courses,
  Instagram,
  Course_Benefits,
  Breadcrumb,
  Courses_Section,
  Magazin,
  Carousel_Title,
} from "../comps/Portal";
import {
  customerReviews,
  futureAcademy,
  newWays,
  whatWeAre,
} from "../data/Constants";
import { courses } from "../data/Courses";

const Home = () => {
  const slicedCourses = courses.slice(-6);

  return (
    <>
      <Home_Hero />
      <Breadcrumb />
      <Courses_Section
        course={{ title: "تازه‌ترین کلاس ها", courses: slicedCourses }}
      />
      <Half thing={futureAcademy} bg />
      <Popular_Courses />
      <Half thing={newWays} reverse bg />
      <Course_Benefits />
      <Half thing={whatWeAre} bg />
      <Magazin />
      <Instagram />
      <Carousel_Title
        title="چیزی که دیگران دربارمون میگن"
        type="review"
        things={customerReviews}
        options={{
          perMove: 1,
          type: "loop",
          arrows: true,
          autoplay: true,
          pagination: false,
          gap: "1em",
          perPage: 3,
          breakpoints: {
            780: {
              perPage: 1,
            },
            1200: {
              perPage: 2,
            },
          },
          focus: "center",
        }}
      />
    </>
  );
};

export default Home;
