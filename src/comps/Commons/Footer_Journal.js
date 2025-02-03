import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer_Journal = () => {
  const benefits = ["تخفیف ها", "رویداد ها", "بروزرسانی ها"];
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
          setShowMessage(true);
          setMessage("مشکلی پیش آمده!؟");
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        }
      );
  };

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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex p-2 gap-x-3 md:min-w-[35vw] min-w-full bg rounded-full"
          >
            <input
              type="email"
              id="sender_email"
              name="sender_email"
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
