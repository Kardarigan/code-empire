import { contactForm } from "../data/Constants";
import {
  Breadcrumb,
  Contact_Info,
  Contact_Us,
  Form,
  Hero,
  Tip,
} from "../comps/Portal";

const Contact = () => {
  return (
    <>
      <Hero
        title="پل ارتباطی با امپراتوری کد"
        subtitle="میتوانید با امپراتوری از طریق راه های زیر در ارتباط باشید"
      />
      <Breadcrumb />
      <Contact_Info />
      <Contact_Us />
      <section className="case container-sm">
        <h3 className="title text-center mb-5">
          <span className="mac-bg">فرم مشاوره رایگان امپراتوری</span>
        </h3>
        <Form
          fields={contactForm}
          service="service_6smeggr"
          template="template_empire_contact"
        />
        <Tip
          className="mt-12"
          message='<a href="mailto:duckduckstay@hotmail.com">اگه ازین فرما خوشت نمیاد یه ایمیل ساده میتونی بفرستی</a>.'
        />
      </section>
    </>
  );
};

export default Contact;
