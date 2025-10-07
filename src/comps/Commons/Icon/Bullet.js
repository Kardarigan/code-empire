// import { logo } from "../../../data/Constants";

const Bullet = ({ customClass = "" }) => {
  return (
    <>
      {/* <img src={logo.icon} alt="Lotus Logo Icon" className={customClass} /> */}
      <i
        className={
          "fa-solid fa-hashtag title-sm me-2 text-blue-500 drop-shadow-[0_1.2px_1.2px_rgb(0,0,0)] " +
          customClass
        }
      />
    </>
  );
};

export default Bullet;
