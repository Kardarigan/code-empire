import React from "react";
import { Link } from "react-router-dom";

const Image_Section = ({ cover, link }) => {
  return (
    <section className="case">
      <Link to={link}>
        <img src={cover} className="rounded-3xl" />
      </Link>
    </section>
  );
};

export default Image_Section;
