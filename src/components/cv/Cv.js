import React from "react";
import "./Cv.css";
import Introduction from "../introduction/Introduction";
import Skills from "../skills/Skills.js";
import Education from "../education/Education.js";
import Experience from "../experience/Experience";

function Cv() {
  return (
    <div className="cv">
      <Introduction></Introduction>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
    </div>
  );
}

export default Cv;
