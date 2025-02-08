import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Hamburger } from "../Portal";
import { navLinks } from "../../data/Constants";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [alert, setAlert] = useState(true); // Default to true if no value is found in localStorage
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  // Initialize the `alert` state from localStorage
  useEffect(() => {
    const savedAlertState = localStorage.getItem("alert");
    if (savedAlertState !== null) {
      setAlert(JSON.parse(savedAlertState));
    }
  }, []);

  // Save the `alert` state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("alert", JSON.stringify(alert));
  }, [alert]);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
      setHamburger(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-green-500 w-full sticky top-0 z-20 ${
          alert ? "block" : "hidden"
        }
        `}
        dir="rtl"
      >
        <div className="container flex-seperate gap-x-8 px-5 py-2">
          <p className="para">
            از این پس، به‌منظور اطمینان دانشجویان، تمامی کلاس‌ها با همکاری
            پلتفرم معتبر و شناخته‌شده‌ی <b>ایوند</b> برگزار خواهند شد.
          </p>
          <button
            onClick={() => setAlert(false)}
            className="button button-outline-dark p-0 min-w-8 size-8"
          >
            <i className="fas fa-xmark" />
          </button>
        </div>
      </div>
      <header
        className={`${
          navbarBackground || hamburger ? "bg-slate-900 " : "bg-transparent"
        } w-full fixed z-20 transition-all duration-300${
          hamburger ? " opacity-100" : ""
        } z-30`}
      >
        <div
          className="container flex-seperate px-5 text-slate-100 py-3"
          dir="rtl"
        >
          <button
            className={`md:hidden flex-fullcenter text-xl rounded size-10 ${
              hamburger ? "bg-slate-700 text-slate-50" : "bg-slate-800"
            }`}
            onClick={() => setHamburger(!hamburger)}
          >
            <i
              className={`fas fa-sharp fa-bars transition-all ${
                hamburger ? "rotate-90" : ""
              }`}
            />
          </button>
          <Link to="/">
            <h2 className="text-2xl">
              <span>امپراتوری</span> <span className="text-blue-400">کد</span>
            </h2>
          </Link>
          <nav className="flex flex-row items-center gap-4 ms-6 font-bold max-md:hidden">
            {navLinks.map((item, index) => {
              return (
                <NavLink to={item.href} key={index} className="navitem">
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <Link
            to="/courses/register-form"
            className="button button-outline-light max-md:hidden"
          >
            رزرو کلاس
          </Link>
        </div>
      </header>
      <section
        className={`displayTrans fixed ${
          hamburger ? "visible opacity-100" : "invisible opacity-0"
        } w-screen h-[calc(100%-64px)] top-[64px] left-0 right-0 z-50 bg-slate-900`}
      >
        <Hamburger setHamburger={setHamburger} />
      </section>
    </>
  );
};

export default Navbar;
