const Tip = ({ message, className, blue = false }) => {
  return (
    <div
      className={`w-full inline-flex md:justify-between justify-center items-center p-3 warn ${className}`}
    >
      <span className="warn font-extrabold px-5 text-center max-md:hidden">
        توجه
      </span>
      <p
        dangerouslySetInnerHTML={{ __html: message }}
        className="md:mx-5 max-md:text-sm para"
      />
      <i className="fal fa-chevron-left px-3 max-md:hidden" />
    </div>
  );
};

export default Tip;
