import { policy, rulesBill } from "../../data/Policy";
import { Article, Rules_Scroll, Tip } from "../Portal";

const Rules_Overview = () => {
  return (
    <>
      <section className="container-sm padding-x">
        <Article article={rulesBill} icons={false} gap="gap-y-12" />
        <Tip
          message="هرگونه استفاده از خدمات وبسایت <b>امپراتوری کد</b> به منظور خواندن و پذیرش منشور قوانین این وبسایت می‌باشد"
          className="mt-12"
        />
        <div className="mt-12 text-center">
          <h3 className="title mt-20 mac-bg">قوانین ویژه</h3>
          <div className="mt-8">
            <Rules_Scroll title="کلاس های آموزشی" rules={policy} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules_Overview;
