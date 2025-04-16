import { Link } from "react-router-dom";
import { blogs } from "../../data/Blogs";
import { categories, logo } from "../../data/Constants";

const Blog_Side = ({ author }) => {
  const latestBlogs = blogs.slice(-3).reverse();

  return (
    <aside className="flex flex-col gap-y-5 max-lg:mt-12 lg:col-span-1">
      <section className="mac-border bg py-3 flex-seperate">
        <span className="text-slate-100">نویسنده :</span>
        <h5 className="text-slate-50">{author}</h5>
      </section>
      <section className="mac-border pt-3 pb-5">
        <h4 className="title-sm flex items-center">
          <img src={logo.icon} alt="Lotus Logo Icon" className="seze-icon" />
          آخرین مطالب
        </h4>
        <div className="grid gap-y-3 mt-5 mb-8">
          {latestBlogs.map((item, index) => {
            return (
              <>
                <Link
                  to={"/blog/" + item.title}
                  className="flex gap-x-2"
                  key={index}
                >
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="size-20 rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="line-clamp-2 text-ellipsis">{item.title}</h3>
                    <div>
                      <span className="warn text-xs px-2">{item.category}</span>
                    </div>
                  </div>
                </Link>
                {index < latestBlogs.length && <hr className="mx-10" />}
              </>
            );
          })}
        </div>
        <Link to="/blog" className="w-full button button-dark">
          همه
        </Link>
      </section>
      <section className="mac-border pt-3 pb-5">
        <h4 className="title-sm flex items-center">
          <img src={logo.icon} alt="Lotus Logo Icon" className="seze-icon" />
          دسته‌بندی ها
        </h4>
        <nav className="mt-5">
          <ul className="grid gap-y-1">
            {categories.map((item, index) => {
              if (item != "همه") {
                return (
                  <li key={index}>
                    <Link
                      to={`/blog#` + item}
                      className="button button-blue w-full"
                    >
                      {item}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default Blog_Side;
