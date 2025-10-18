import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LOCAL_STORAGE_KEY = "formDisabled";

const Footer_Journal = () => {
  const benefits = ["تخفیف ها", "رویداد ها", "بروزرسانی ها"];
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [formDisabled, setFormDisabled] = useState(() => {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValue === "true";
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, formDisabled);
  }, [formDisabled]);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormDisabled(true);
    const formData = new FormData(form.current);
    formData.append("sender_name", "Journal Member");

    emailjs
      .sendForm("service_6smeggr", "template_empire_contact", form.current, {
        publicKey: "7g-CYayFlK8AuXyt9",
      })
      .then(
        () => {
          setShowMessage(true);
          setMessage("هم اکنون شما عضو ماهنامه هستید");
          setTimeout(() => {
            setShowMessage(false);
            window.scrollTo(0, 0);
          }, 2000);
        },
        () => {
          setFormDisabled(true);
          setShowMessage(true);
          setMessage("مشکلی پیش آمده!؟");
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        }
      );
  };

  return (
    <div className="absolute lg:top-[-15%] top-[-15%] right-0 w-full">
      <div className="lg:w-[50vw] w-[90vw] mx-auto bg text-slate-100 md:p-12 px-5 py-8 rounded-3xl gird grid-cols-2">
        <div className="text-center">
          <h4 className="title">پیوستن به ماهنامه‌ی امپراتوری</h4>
          <div className="flex-fullcenter max-lg:flex-col mt-3">
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex p-2 gap-x-3 md:min-w-[35vw] min-w-full bg rounded-full"
          >
            <input
              disabled={formDisabled}
              type="email"
              id="sender_email"
              name="sender_email"
              className={`py-0 field rounded-full bg-opacity-80 focus-within:bg-opacity-100 transition-all ${
                formDisabled ? "opacity-65" : ""
              }`}
              placeholder="ایمیل خود را وارد کنید..."
              required
            />
            <button
              disabled={formDisabled}
              type="submit"
              className={`md:py-5 py-5 md:pr-9 md:pl-10 pl-10 pr-8 flex-fullcenter ${
                formDisabled ? "opacity-65" : "hover:opacity-80"
              }`}
            >
              <span className="absolute">
                {formDisabled ? "ارسال شد" : "ثبت نام"}
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Message Notification */}
      <div
        className={`fixed flex items-center bottom-[22vw] right-[1vh] displayTrans duration-500 card size-auto p-5 ${
          showMessage ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Footer_Journal;
