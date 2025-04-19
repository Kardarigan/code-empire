import { contactInfo, logo } from "../../data/Constants";
import { Bullet } from "../Portal";

const Contact_Info = () => {
  return (
    <section className="case container-sm">
      <h3 className="title text-center mac-bg">راه های ارتباط با امپراتوری</h3>
      <div className="box mt-5">
        <ul className="grid gap-y-5">
          {contactInfo.map((item, index) => {
            return (
              <li key={index}>
                <h5 className="title-sm flex items-center">
                  <Bullet />
                  {item.label}
                </h5>
                <p className="para mt-2 text-end" dir="ltr">
                  {item.describe}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact_Info;
