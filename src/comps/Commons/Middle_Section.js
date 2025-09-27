import { Link } from "react-router-dom";

const Middle_Section = ({ thing }) => {
  const { title, subtitle, links } = thing;
  return (
    <section className="case container">
      <div className="mac-border flex-seperate max-md:flex-col max-md:text-center px-8 py-10">
        <div>
          <h2 className="title">{title}</h2>
          <p className="para">{subtitle}</p>
        </div>
        <div className="max-md:mt-8">
          {links.map((link, index) => (
            <Link
              to={link.href}
              className={`button ${
                index === 0 ? "button-dark" : "button-blue mt-2"
              }`}
            >
              <div className="flex-fullcenter gap-1">
                {link.icon && <i className={link.icon} />}
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Middle_Section;
