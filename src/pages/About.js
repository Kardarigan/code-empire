import {
  Half,
  Hero,
  About_Numbers,
  About_Team,
  Breadcrumb,
  Middle_Section,
} from "../comps/Portal";
import { about, logo, middleJoinUs } from "../data/Constants";

const About = () => {
  console.log([about.about, about.mission]);

  return (
    <>
      <Hero
        title="پیش از هرچیز بهتره مارو بشناسی"
        subtitle="میتونی هر چی که میخوای از ما بدونی، تو این بخش پیدا کنی"
      />
      <Breadcrumb />
      {about.halfSections.map((section, index) => (
        <>
          <Half
            thing={section}
            reverse={index % 2 === 0 ? false : true}
            bg={index % 2 === 0 ? false : true}
          />
          {index === 1 && (
            <>
              <About_Numbers />
              <About_Team />
            </>
          )}
        </>
      ))}
      <Middle_Section thing={middleJoinUs} />
      <section className="padding-x text-center">
        <div className="inline-block min-w-52 w-1/6 card bg-gradient-to-br from-slate-900 to-blue-600 from-65%">
          <img src={logo.iconTitle} alt="Empire's Official Logo" />
        </div>
        <p className="label text-slate-600">لوگو و نماد رسمی امپراتوری کد</p>
      </section>
    </>
  );
};

export default About;
