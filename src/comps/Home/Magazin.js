import { Link } from "react-router-dom";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Magazin = () => {
  return (
    <section className="case xl:mt-36 xl:mb-32">
      <div className="box xl:grid grid-cols-4">
        <div className="col-span-1">
          <div className="card max-xl:p-5 block max-xl:-translate-y-16 xl:translate-x-20 xl:w-[154%] text-center">
            <h3 className="title">مجله‌ی امپراتوری از سراسر دنیای تکنولوژی</h3>
            <p className="para-sm my-5 max-xl:hidden">
              سربازان امپراتوری کد، هر روز و هر شب در حال گردآوری کارا ترین و
              مفید ترین مطالب از تمام دنیای تکنولوژی، به ویژه برنامه نویسی،
              هستند تا شما دوستان گرامی بتوانید در راه تبدیل شدن به یک برنامه
              نویس حرفه‌ای پیشرفت کنید و به غیر از کدنویسی، از چیزهای مربوط به
              آن نیز مطلع شوید.
            </p>
            <Link to="/blog" className="button button-dark mt-5">
              مشاهده تمام مقالات
              <i className="fa-duotone fa-solid fa-sword rotate-[225deg] ms-2" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 relative text-center">
          <div className="xl:absolute grid md:grid-cols-2 xl:-translate-x-20 xl:-translate-y-24 gap-3">
            {blogs.slice(-4).map((blog, index) => {
              const newClasses = index % 2 === 0 ? " xl:-translate-y-20" : "";
              return (
                <Blog_Card
                  blog={blog}
                  key={index}
                  customClass={"text-start" + newClasses}
                />
              );
            })}
          </div>
          <Link to="/blog" className="button button-dark mt-5 xl:hidden">
            مشاهده تمام مقالات
            <i className="fa-duotone fa-solid fa-sword rotate-[225deg] ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Magazin;
