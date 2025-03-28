import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({
  fields,
  submit = "ارسال",
  service,
  template,
  selectedOption,
  setSelectedOption,
  afterSubmitMessage = "پیام شما فرستاده شد",
  duration = 2000,
}) => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleFieldChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    window.location.hash = encodeURIComponent(selectedOption);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: "7g-CYayFlK8AuXyt9",
      })
      .then(
        () => {
          setShowMessage(true);
          setMessage(afterSubmitMessage);
          setTimeout(() => {
            setShowMessage(false);
            window.scrollTo(0, 0);
          }, duration);
        },
        () => {
          setShowMessage(true);
          setMessage("مشکلی پیش آمده!؟");
          setTimeout(() => {
            setShowMessage(false);
          }, duration);
        }
      );
  };

  return (
    <>
      <form className="box" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-3">
          {fields.map((item, index) => {
            const id = item.label.replace(/\s+/g, "-").toLowerCase();
            return (
              <div
                key={index}
                className={item.half ? "max-md:col-span-2" : "col-span-2"}
              >
                <label htmlFor={id} className="label">
                  {item.label}
                </label>
                <div className="mt-1">
                  {item.type === "textarea" ? (
                    <textarea
                      className="field min-h-[120px]"
                      required={item.required}
                      name={item.name}
                    ></textarea>
                  ) : item.type === "select" ? (
                    <select
                      className="field"
                      name={item.name}
                      onChange={handleFieldChange}
                      value={selectedOption || ""}
                    >
                      <option value="" disabled>
                        انتخاب گزینه
                      </option>
                      {item.options.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      type={item.type}
                      name={item.name}
                      className="field"
                      required={item.required}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="button button-blue mt-5" type="submit">
          {submit}
        </button>
      </form>

      <div
        className={`fixed flex-fullcenter size-screen right-0 bottom-0 z-50 displayTrans duration-500 bg-slate-100 bg-opacity-15 ${
          showMessage ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className=" card size-auto">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Form;
