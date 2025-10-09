import { teamMembers } from "../../data/Constants";
import { Loaded_Animation } from "../Portal";

const About_Team = () => {
  const durations = ["duration-[2000ms]", "", "duration-[3000ms]"];

  return (
    <section className="case text-center">
      <h3 className="title-lg mb-10 mac-bg">آینده‌ی شما در دستان امنی است</h3>
      <p>با تیم کار کشته ی امپراتوری کد آشنا شو!</p>
      <div className="flex max-sm:flex-col gap-y-5 mt-12">
        {teamMembers.map((item, index) => {
          const { ref, className } = Loaded_Animation();

          return (
            <div
              className={`border-4 border-slate-800 text-slate-50 group relative rounded-3xl overflow-hidden ${className} ${
                durations[index]
              } ${index === 1 ? " sm:scale-105 sm:z-10" : ""}`}
              key={index}
              ref={ref}
            >
              <div className="text-center absolute left-0 right-0 bottom-0 md:pb-5 pb-2 min-h-10 max-sm:flex-fullcenter rounded-t-3xl bg-slate-800 bg-opacity-70 transition-all group-hover:rounded-none group-hover:min-h-full">
                <div>
                  <h2 className="title-sm md:mt-5">{item.name}</h2>
                  <h4 className="font-thin lg:text-sm text-[10px]">
                    {item.role}
                  </h4>
                  <p className="lg:mt-20 md:mt-5 mt-2 max-w-[80%] mx-auto lg:text-sm sm:text-[10px] text-sm absolute right-0 left-0">
                    {item.bio}
                  </p>
                </div>
              </div>
              <img src={item.profile} alt={"پروفایل " + item.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About_Team;
