import React from "react";
import { Link } from "react-router-dom";

const Image_Section = ({ thing }) => {
  const { cover, href } = thing;
  return (
    <section className="case">
      <Link to={href}>
        <img src={cover} className="rounded-3xl" />
      </Link>
    </section>
  );
};

export default Image_Section;
