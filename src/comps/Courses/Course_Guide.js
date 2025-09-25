import React from "react";
import { Breadcrumb, Half, Hero, Top_Image_Section } from "../Portal";
import { guide } from "../../data/Constants";

const Course_Guide = () => {
  return (
    <>
      <Hero
        title="چطوری قراره یاد بگیری؟"
        subtitle="با ساختار و روند آموزش در کلاس آنلاین-خصوصی آشنا بشید."
      />
      <Breadcrumb />
      <Top_Image_Section thing={guide.intro} />
      {guide.types.map((type, index) => (
        <Half thing={type} reverse={index % 2 !== 0 ? true : false} />
      ))}
    </>
  );
};

export default Course_Guide;
