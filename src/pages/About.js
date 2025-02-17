import {
  Half,
  Hero,
  Top_Image_Section,
  About_Numbers,
  About_Team,
  Breadcrumb,
  Carousel_Title,
} from "../comps/Portal";
import Cover_2 from "../assets/painting_of_an_ancient_Persian_with_sassanid_helmet_thousans_soldiers_while_their_coding_in_their_laptop_in_front_of_the_perspolise_png.png";
import { about, companies, logo } from "../data/Constants";

const About = () => {
  return (
    <>
      <Hero
        title="پیش از هرچیز بهتره مارو بشناسی"
        subtitle="میتونی هر چی که میخوای از ما بدونی، تو این بخش پیدا کنی"
      />
      <Breadcrumb />
      <Half thing={about.job} reverse />
      <About_Numbers />
      <Half thing={about.reagon} />
      <Top_Image_Section
        label="دسته ی یکم لشگر تازه کار ها درحال یافتن راهی برای وسط آوردن یک المنت"
        cover={Cover_2}
        title="ما از نیرو های تازه کار استقبال میکنیم"
        describe="اینجا امپراتوری ای از کد هاست! امپراتوری کد دارای ارتشی در کد زنی نخبه، مشاورانی ماهر و آموزگارانی با تجربه است که برای افزایش کیفیت کسب و کار ها و همچنین بنای دیگر پادشاهی ها از هیچ میجنگند. هرکس که دارای چنین خصوصیاتی است میتواند بخشی از این امپراتوری باشد و این است امپراتوری کد..."
      />
      <Carousel_Title
        title="دانش آموختگان ما در این شرکت ها مشغول به کارند"
        type="company"
        things={companies}
        options={{
          perMove: 1,
          type: "loop",
          arrows: true,
          autoplay: true,
          pagination: false,
          gap: "2em",
          perPage: 5,
          breakpoints: {
            768: {
              perPage: 4,
            },
            640: {
              perPage: 2,
            },
          },
          focus: "center",
        }}
      />
      <Half thing={about.idea} />
      <About_Team />
      <section className="container padding-x text-center">
        <a
          href={logo.iconTitle}
          className="inline-block min-w-52 w-1/4 card bg-gradient-to-br from-slate-900 to-blue-600 from-65%"
        >
          <img src={logo.iconTitle} alt="Empire's Official Logo" />
        </a>
        <p className="label text-slate-600">لوگو و نماد رسمی امپراتوری کد</p>
      </section>
    </>
  );
};

export default About;
