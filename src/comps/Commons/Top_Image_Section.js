import { Bullet, Loaded_Animation } from "../Portal";

const Top_Image_Section = ({ thing }) => {
  const { ref, className } = Loaded_Animation();
  const { label, cover, title, describe } = thing;
  return (
    <section className="case grid gap-y-5">
      <div>
        <img
          ref={ref}
          src={cover}
          alt={title}
          className={`w-full rounded-3xl max-h-[60vh] bg-fullobject ${className}`}
        />
        {label && <p className="label mt-2">- {label}</p>}
      </div>
      {title && (
        <h2 className="title-lg max-md:text-center flex items-start">
          <Bullet customClass="size-9 title-lg max-md:hidden me-3" />
          <span className="md:halfbg-left max-md:mac-bg mt-1">{title}</span>
        </h2>
      )}
      <p className="para">{describe}</p>
    </section>
  );
};

export default Top_Image_Section;
