import {
  Breadcrumb,
  Half,
  Hero,
  Image_Section,
  Infobox,
  Top_Image_Section,
} from "../Portal";
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
      {[guide.method, guide.structure].map((info, index) => (
        <>
          <Infobox thing={info} />
          {index === 0 && (
            <Image_Section cover={guide.ctaCover} link="/courses" />
          )}
        </>
      ))}
    </>
  );
};

export default Course_Guide;
