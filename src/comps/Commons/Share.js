import { shareButtons } from "../../data/Constants";

const Share = ({ text = null, customClass = null }) => {
  const hereUrl = window.location.href;

  const handleShare = async (event) => {
    event.preventDefault();

    if (navigator.share) {
      try {
        await navigator.share({
          title: "پیامی از امپراتوری کد 📜",
          text:
            text ||
            "شما به بازدید از این صفحه‌ی در سایت امپراتوری کد خوانده شدید.",
          url: window.location.href,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <section id="firstSection" className={"flex-seperate py-2 " + customClass}>
      <div className="flex-seperate w-full">
        <span>اشتراک گذاری:</span>
        <ul className="flex items-center md:gap-x-3 gap-x-2 ms-2 title-sm text-blue-600">
          {shareButtons.map((item, index) => {
            return (
              <li key={index} className="translate-y-1">
                <a href={item.href + hereUrl} title={item.title}>
                  <i className={item.icon + " hover:opacity-60"} />
                </a>
              </li>
            );
          })}
          <li className="translate-y-1">
            <button
              className="hover:opacity-60"
              onClick={handleShare}
              title="همرسانی ⚖"
            >
              <i className="fa-regular fa-share-nodes"></i>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Share;
