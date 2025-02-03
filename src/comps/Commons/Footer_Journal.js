const Footer_Journal = () => {
  const benefits = ["تخفیف ها", "رویداد ها", "بروزرسانی ها"];

  return (
    <div className="absolute lg:top-[-55%] top-[-15%] right-0 w-full">
      <div className="lg:w-[50vw] w-[90vw] mx-auto bg text-slate-100 md:p-12 px-5 py-8 rounded-3xl gird grid-cols-2">
        <div className="text-center">
          <h4 className="title">عضویت در ماهنامه‌ی امپراتوری</h4>
          <div className="flex-fullcenter max-md:flex-col mt-3">
            <p>با عضویت ماهنامه، همیشه به‌روز باشید:</p>
            <ul className="flex gap-x-2 ms-1">
              {benefits.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <i className="fa-duotone fa-solid fa-circle-check me-1"></i>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <form className="flex p-2 gap-x-3 md:min-w-[35vw] min-w-full bg rounded-full">
            <input
              type="text"
              id="sender_email"
              name="sender"
              className="py-0 field rounded-full bg-opacity-80 focus-within:bg-opacity-100 transition-all"
              placeholder="ایمیل خود را وارد کنید..."
              required
            />
            <button
              type="submit"
              className="md:p-3 py-3 md:pl-5 pl-2 hover:opacity-80"
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer_Journal;
