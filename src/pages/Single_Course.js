import { useParams } from "react-router-dom";
import {
  Article,
  Breadcrumb,
  Courses_Section,
  FAQ,
  Hero,
  Main_Side,
  Share,
} from "../comps/Portal";
import { courses } from "../data/Courses";
import { useEffect, useState, useMemo } from "react";
import { shuffle } from "../comps/Utility/shuffle";

const Single_Course = () => {
  const { course } = useParams();
  const theCourse = courses.find((e) => e && e.path === course);
  const subtitle = theCourse.persianTitle + ", " + theCourse.describe;
  const [showRegisterButton, setShowRegisterButton] = useState(true);

  const links = [
    {
      label: "ثبت نام کلاس خصوصی",
      path: theCourse.registerLink,
    },
  ];

  if (theCourse.publicLink) {
    links.push({ label: "ثبت نام کلاس گـــروهی", path: theCourse.publicLink });
  }

  const similarCourses = useMemo(() => {
    return shuffle(
      courses.filter(
        (e) => e.category === theCourse?.category && e.path !== theCourse.path
      ),
      3
    );
  }, [theCourse]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 3200) {
        setShowRegisterButton(true);
      } else {
        setShowRegisterButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero title={theCourse.title} subtitle={subtitle} />
      <Breadcrumb />
      <section className="grid md:grid-cols-5 gap-8 container padding relative">
        <div className="md:col-span-3 max-md:pb-12">
          <Share />
          <div className="grid gap-y-12">
            <Article article={theCourse.paragraphs} />
            <FAQ questions={theCourse.faq} />
          </div>
        </div>
        <Main_Side
          details={theCourse.details}
          specs={theCourse.specs}
          privateLink={{}}
          links={links}
          title={theCourse.title}
          capacity={theCourse.capacity}
          price={theCourse.price}
          hint="در صورت پرداخت یکجا از 10% تخفیف روی بهای کلاس بهره‌مند میشوید!"
        />
      </section>
      <section className="container padding-x pb-12 max-md:pt-24">
        <Courses_Section
          course={{ title: "کلاس های مشابه", courses: similarCourses }}
        />
      </section>
      <a
        className={`md:hidden fixed bottom-16 z-20 left-10 button button-dark rounded title-sm w-52 h-12 displayTrans ${
          showRegisterButton ? "visible opacity-100" : "invisible opacity-0"
        }`}
        href="#sidebar"
      >
        ثبت نام
      </a>
    </>
  );
};

export default Single_Course;
