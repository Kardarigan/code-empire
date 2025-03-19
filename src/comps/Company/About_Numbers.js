import React from "react";
import { about } from "../../data/Constants";
import { Count_Animation } from "../Portal";

const About_Numbers = () => {
  return (
    <section className="bg-blue-50 padding">
      <div className="container grid sm:grid-cols-7 gap-5">
        {about.numbers.map((item, index) => {
          const { count, elementRef } = Count_Animation(item.number, 1500);
          return (
            <React.Fragment key={index}>
              <div className="text-center" ref={elementRef}>
                <h6 className="text-blue-500 title-lg">{count}+</h6>
                <h4 className="md:text-sm text-[10px] md:mt-3 mt-1">
                  {item.title}
                </h4>
              </div>
              {index !== about.numbers.length - 1 && (
                <div className="w-[1px] bg-slate-950 h-full mx-auto bg-opacity-10" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default About_Numbers;
