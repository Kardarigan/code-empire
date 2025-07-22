import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Hamburger } from "../Portal";
import { logo, navLinks } from "../../data/Constants";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [alert, setAlert] = useState(true);
  const [alertFlag, setAlertFlag] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  const handleAlert = () => {
    setAlert(false);
    setAlertFlag(true);
  };

  useEffect(() => {
    const savedAlertState = localStorage.getItem("alert");
    if (savedAlertState !== null) {
      setAlert(JSON.parse(savedAlertState));
    }
  }, []);

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

  useEffect(() => {
    if (!alertFlag) {
      setAlert(!hamburger);
    }
  }, [hamburger]);

  return (
    <>
      <div
        className={`bg-green-500 w-full sticky top-0 z-50 ${alert ? "block" : "hidden"
          }`}
        dir="rtl"
      >
        <div className="container flex-seperate gap-x-8 px-5 py-2">
          <p className="para text-[11px]">
            از این پس، به‌منظور اطمینان دانشجویان، تمامی کلاس‌های گروهی با
            همکاری پلتفرم معتبر و شناخته‌شده‌ی <b>ایوند</b> برگزار خواهند شد.
          </p>
          <button
            aria-label="Close alert"
            onClick={handleAlert}
            className="button button-outline-dark p-0 min-w-8 size-8"
          >
            <i className="fas fa-xmark mt-[5px]" />
          </button>
        </div>
      </div>
      <header
        className={`${navbarBackground || hamburger ? "bg-slate-900 " : "bg-transparent"
          } w-full fixed z-30 transition-all duration-300${hamburger ? " opacity-100" : ""
          }`}
      >
        <div
          className="container flex-seperate px-5 text-slate-100 py-3"
          dir="rtl"
        >
          <button
            aria-label="Toggle menu"
            className={`md:hidden flex-fullcenter text-xl rounded-xl size-10 ${hamburger ? "bg-slate-700 text-slate-50" : "bg-slate-800"
              }`}
            onClick={() => setHamburger(!hamburger)}
          >
            <i
              className={`fas fa-sharp fa-bars transition-all ${hamburger ? "rotate-90" : ""
                }`}
            />
          </button>
          <Link to="/">
            <img src={logo.iconTitle} alt="Empire's Logo" className="w-24" />
          </Link>
          <nav className="flex flex-row items-center gap-4 ms-6 font-bold max-md:hidden">
            {navLinks.map((item, index) => (
              <NavLink to={item.href} key={index} className="navitem">
                {item.label}
              </NavLink>
            ))}
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
        className={`fixed ${hamburger ? "visible opacity-100" : "invisible opacity-0"
          } w-screen h-[calc(100%-64px)] top-[64px] left-0 right-0 z-50 bg-slate-900 transition-all duration-300`}
      >
        <Hamburger setHamburger={setHamburger} />
      </section>
    </>
  );
};

export default Navbar;
