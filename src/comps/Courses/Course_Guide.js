import React from "react";
import { Breadcrumb, Half, Hero, Infobox, Top_Image_Section } from "../Portal";
import { guide } from "../../data/Constants";
import { Link } from "react-router-dom";

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
      {[guide.method, guide.structure].map((info, index) => (
        <>
          <Infobox thing={info} />
          {index === 0 && (
            <section className="case">
              <Link to="/courses">
                <img src={guide.ctaCover} className="rounded-3xl" />
              </Link>
            </section>
          )}
        </>
      ))}
    </>
  );
};

export default Course_Guide;
