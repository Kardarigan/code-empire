import { Bullet } from "../Portal";

const Article = ({ article, icons = true, space = "space-y-24" }) => {
  const makeBold = (text) => {
    const index = text.indexOf(":");
    if (index === -1) {
      return text;
    }
    return `<b>${text.substring(0, index)}</b>${text.substring(index)}`;
  };

  return (
    <article className={space}>
      {article.map((item, index) => {
        return (
          <section key={index}>
            {item.cover && (
              <div className="mb-5">
                {item.cover.endsWith(".mp4") || item.cover.endsWith(".webm") ? (
                  <video autoPlay muted controls loop className=" rounded">
                    <source
                      src={item.cover}
                      type={`video/${item.cover.split(".").pop()}`}
                    />
                    مرورگر شما از پخش ویدیو پشتیبانی نمیکند
                  </video>
                ) : (
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="bg-fullobject rounded w-full max-h-[60vh]"
                  />
                )}
              </div>
            )}
            {item.title && (
              <h2 className="title halfbg-left inline-flex items-start">
                {icons && <Bullet />}
                {item.title}
              </h2>
            )}
            {item.paragraph?.map((para, index) => {
              return (
                <p
                  key={index}
                  className="para mt-5 text-slate-800"
                  dangerouslySetInnerHTML={{ __html: makeBold(para) }}
                />
              );
            })}
            {item.hints && (
              <ul className="hints mt-12">
                {item.hints.map((hint, index) => {
                  return <li key={index}>{hint}</li>;
                })}
              </ul>
            )}
          </section>
        );
      })}
    </article>
  );
};

export default Article;
