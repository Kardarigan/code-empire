import React from "react";
import { news } from "../../data/News";
import { Carousel } from "../Portal";

const Courses_News = () => {
  return (
    <div>
      <Carousel
        type="news"
        things={news}
        options={{
          perMove: 1,
          type: "loop",
          arrows: false,
          autoplay: true,
          focus: "center",
        }}
      />
    </div>
  );
};

export default Courses_News;
