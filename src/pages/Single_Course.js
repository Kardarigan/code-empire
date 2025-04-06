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

  const links = [
    {
      label: "ثبت نام کلاس خصوصی",
      path: "/courses/register-form",
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

  return (
    <>
      <Hero title={theCourse.title} subtitle={subtitle} />
      <Breadcrumb />
      <section className="case pt-12 grid lg:grid-cols-5 gap-8 relative">
        <main className="max-lg:mo lg:col-span-3 max-lg:order-last">
          <Share customClass="mac-border mb-5" />
          <div className="grid gap-y-12">
            <Article article={theCourse.paragraphs} />
            <FAQ questions={theCourse.faq} />
          </div>
        </main>
        <Main_Side
          details={theCourse.details}
          specs={theCourse.specs}
          links={links}
          title={theCourse.title}
          capacity={theCourse.capacity}
          price={theCourse.price}
          hint="در صورت پرداخت یکجا از 10% تخفیف روی بهای کلاس بهره‌مند میشوید!"
        />
      </section>
      <Courses_Section
        course={{ title: "کلاس های مشابه", courses: similarCourses }}
      />
    </>
  );
};

export default Single_Course;
