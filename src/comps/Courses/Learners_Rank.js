import { Link } from "react-router-dom";
import { learnersRank } from "../../data/Ranking";

const Learners_Rank = () => {
  const tableHeading = ["جایگاه", "پروفایل", "نام", "وضعیت", "رتبه", "کلاس"];
  return (
    <section className="case text-center">
      <h3 className="title-lg mac-bg">برگزیدگان ماه شهریور</h3>
      <div className="rounded-3xl overflow-hidden mt-12 border-2 border-slate-950 bg-slate-900">
        <table className="w-full">
          <thead className="text-slate-100">
            <tr>
              {tableHeading.map((item, index) => {
                return (
                  <th
                    className={`py-5${
                      index === 3 || index === 5 ? " max-md:hidden" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-slate-100">
            {learnersRank.map((item, index) => {
              return (
                <tr className="border-b" key={index}>
                  <td className="md:p-5">{index + 1}</td>
                  <td className="py-5">
                    <img
                      src={item.profile + "?username=" + index}
                      alt={"پروفایل " + item.name}
                      className="size-16 mx-auto"
                    />
                  </td>
                  <td className="md:p-5 p-2">{item.name}</td>
                  <td className="p-5 max-md:hidden">
                    {item.isLearning ? (
                      <span className="rounded-xl bg-slate-900 text-slate-100 p-2">
                        درحال یادگیری
                      </span>
                    ) : (
                      <span className="rounded-xl bg-blue-600 text-blue-100 p-2">
                        پـایـان یادگیری
                      </span>
                    )}
                  </td>
                  <td className="md:p-5 pe-3">
                    {item.rank}
                    {item.rank === "جاویدان" && (
                      <i className="fa-duotone fa-solid fa-crown text-blue-400 ms-1" />
                    )}
                  </td>
                  <td className="p-5 max-md:hidden">{item.course}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center label">
        معیار های انتخاب دانشجو های برتر رو میتونی{" "}
        <Link to="/policy/رده‌بندی دانشجویان" className="link">
          اینجا
        </Link>{" "}
        بخونی.
      </p>
    </section>
  );
};

export default Learners_Rank;
