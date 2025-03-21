import { policy, rulesBill } from "../../data/Policy";
import { Article, Rules_Scroll, Tip } from "../Portal";

const Rules_Overview = () => {
  return (
    <>
      <section className="pagecenter mt-0">
        <Article article={rulesBill} icons={false} gap="gap-y-12" />
        <Tip
          message="هرگونه استفاده از خدمات وبسایت <b>امپراتوری کد</b> به منظور خواندن و پذیرش منشور قوانین این وبسایت می‌باشد"
          className="mt-12"
        />
        <div className="text-center">
          <h3 className="title mt-20 mac-bg">قوانین ویژه</h3>
        </div>
        <div className="mt-12">
          <Rules_Scroll title="کلاس های آموزشی" rules={policy} />
        </div>
      </section>
    </>
  );
};

export default Rules_Overview;
