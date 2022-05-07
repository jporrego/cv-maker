import React from "react";
import "./Experience.css";
import SectionTitle from "../section-title/SectionTitle.js";

function Experience() {
  return (
    <div className="experience">
      <SectionTitle title={"experience"} hAlignment={"flex-end"}></SectionTitle>
      <div className="job">
        <div className="position">Full Stack Developer</div>
        <div className="company">Google</div>
        <div className="date">November 2022-Present</div>
        <p className="description">
          lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="job">
        <div className="position">Full Stack Developer</div>
        <div className="company">Google</div>
        <div className="date">November 2022-Present</div>
        <p className="description">
          lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default Experience;
