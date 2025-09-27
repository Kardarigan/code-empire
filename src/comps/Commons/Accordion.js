import { useState } from "react";

const Accordion = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full border-2 transition-[max-height] duration-200 rounded-3xl px-5 py-3 border-blue-400 overflow-hidden ${
        open ? "max-h-80" : "max-h-[72px]"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex-seperate gap-x-5 h-[46px]">
        <h5 className="select-none">{question.quiz}</h5>
        <i
          className={`fas fa-chevron-down text-blue-400 transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <div className="py-3 relative top-[0]">
        <hr className="mt-2 mb-4" />
        <p className="para">{question.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
