import { Link } from "react-router-dom";
import { footLinks, logo, socialButtons } from "../../data/Constants";
import Footer_Journal from "./Footer_Journal";
import { Bullet } from "../Portal";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-slate-900 text-slate-100 text-center z-20 lg:mt-56 mt-64 md:padding-x pt-32 max-lg:pt-24"
      dir="rtl"
    >
      <Footer_Journal />
      <section className="grid xl:grid-cols-5 lg:grid-cols-3 lg:gap-12 gap-8 text-start padding">
        {footLinks.map((item, index) => {
          return (
            <>
              <div key={index} className={item.class}>
                <h5 className="title-sm mb-4">
                  <Bullet />
                  {item.title}
                </h5>
                <div>
                  {item.describe ? (
                    <div>
                      <p className="text-justify lg:w-2/3 mb-5">
                        {item.describe} <Link to="/about">بیشتر...</Link>
                      </p>
                      <Link to="/">
                        <img
                          src={logo.iconTitle}
                          alt="Empire's Logo"
                          className="w-32"
                        />
                      </Link>
                    </div>
                  ) : item.links ? (
                    <nav>
                      <ul className="grid gap-y-2">
                        {item.links.map((link, i) => {
                          return (
                            <li key={i}>
                              <Link to={link.path} className="link">
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  ) : (
                    <ul className="grid gap-y-2">
                      {item.ways.map((way, i) => {
                        return (
                          <li key={i}>
                            <h6 className="flex items-center gap-2">
                              <i
                                className={
                                  way.icon +
                                  " text-blue-500 rounded-full ps-[5px]"
                                }
                              ></i>
                              {way.label}:
                            </h6>
                            <Link
                              to={way.href}
                              className="block mt-1 mb-3"
                              dir="ltr"
                            >
                              {way.info}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
              {index < footLinks.length - 1 && (
                <hr className="lg:hidden opacity-40" />
              )}
            </>
          );
        })}
      </section>
      <section className="w-full padding-x">
        <hr />
        <div className="flex-seperate">
          <h6>
            <Link to="/about">Code Empire © 2025</Link>
          </h6>
          <ul className="mt-3 pb-3 grid grid-cols-2 gap-4">
            {socialButtons.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>
                    <i className={item.iconClass} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
