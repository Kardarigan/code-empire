import { courseBenefits } from "../../data/Courses";
import Benefit_Card from "./Benefit_Card";

const Infobox = ({ thing }) => {
  const { title, describe, benefits } = thing;
  return (
    <section className="case">
      <div className="max-w-[800px] mx-auto text-center">
        <h3 className="title-lg mac-bg">{title}</h3>
        <p className="mt-5 para text-center">{describe}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 container mt-12">
        {benefits.map((item, index) => {
          return <Benefit_Card benefit={item} i={index} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Infobox;
