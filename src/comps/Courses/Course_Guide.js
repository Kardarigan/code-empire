import {
  Breadcrumb,
  FAQ,
  Half,
  Hero,
  Image_Section,
  Infobox,
  Middle_Section,
  Top_Image_Section,
} from "../Portal";
import { guide, middleSupport } from "../../data/Constants";
import { coursesQuestions } from "../../data/Courses";

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
            <Image_Section cover={guide.ctaCover} link="/courses" />
          )}
        </>
      ))}
      <Middle_Section thing={middleSupport} />
      <section className="case">
        <FAQ questions={coursesQuestions} />
      </section>
    </>
  );
};

export default Course_Guide;
