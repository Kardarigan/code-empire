import { useEffect, useState } from "react";
import { registerForm } from "../../data/Constants";
import { courses } from "../../data/Courses";
import { Form, Hero } from "../Portal";

const Course_Form = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const onHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (courses.map((course) => course.title).includes(hash)) {
        setSelectedCourse(hash);
      } else {
        setSelectedCourse("");
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const chosenCourse = {
    label: "کلاس دلخواه",
    type: "select",
    name: "selected_course",
    options: courses.map((course) => course.title),
    required: true,
  };

  const updatedRegisterForm = [...registerForm, chosenCourse];

  return (
    <>
      <Hero
        title="انگار میخوای یادگیری رو آغاز کنی"
        subtitle="فرم زیر رو پر کن و کلاس ای که میخوای رو برگزین"
      />
      <section className="container-sm case">
        <Form
          fields={updatedRegisterForm}
          selectedOption={selectedCourse}
          setSelectedOption={setSelectedCourse}
          submit="ثبت نام"
          service="service_6smeggr"
          template="template_h64zus6"
          afterSubmitMessage="درخواست ثبت نام شما با موفقیت ارسال شد. به زودی با شما تماس گرفته میشود."
        />
        <p className="label px-5 my-12 text-center">
          پس از تکمیل فرم، کارشناسان ما طی یک روز کاری با شما تماس خواهند گرفت.
        </p>
      </section>
    </>
  );
};

export default Course_Form;
