import React from "react";
import { Breadcrumb, Half, Hero } from "../Portal";

const Course_Guide = () => {
  return (
    <>
      <Hero
        title="چطوری قراره یاد بگیری؟"
        subtitle="با ساختار و روند آموزش در کلاس آنلاین-خصوصی آشنا بشید."
      />
      <Breadcrumb />
      <Half />
      <Half reverse />
      <Half />
    </>
  );
};

export default Course_Guide;
