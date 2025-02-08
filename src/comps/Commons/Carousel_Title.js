import { Carousel } from "../Portal";

const Carousel_Title = ({ title, type, things, options = null }) => {
  return (
    <section className="container padding text-center">
      {title && <h3 className="title mb-10 mac-bg">{title}</h3>}
      <div className="px-5">
        <Carousel type={type} things={things} options={options} />
      </div>
    </section>
  );
};

export default Carousel_Title;
