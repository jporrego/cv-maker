import React, { useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNode,
  faPython,
  faJava,
  faPhp,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../section-title/SectionTitle.js";

function Skills() {
  const [skills, setStills] = useState([faJsSquare, faHtml5]);

  const skillItems = skills.map((skill) => {
    return (
      <FontAwesomeIcon key={skill.iconName} icon={skill} className="icon" />
    );
  });

  return (
    <div className="skills">
      <SectionTitle title={"skills"}></SectionTitle>
      <div className="icons">
        {skillItems}
        {/*
        <FontAwesomeIcon icon={faJsSquare} className="icon" />
        <FontAwesomeIcon icon={faHtml5} className="icon" />
        <FontAwesomeIcon icon={faCss3Alt} className="icon" />
        <FontAwesomeIcon icon={faReact} className="icon" />
        <FontAwesomeIcon icon={faNode} className="icon" />
        <FontAwesomeIcon icon={faPhp} className="icon" />
        <FontAwesomeIcon icon={faPython} className="icon" />
        <FontAwesomeIcon icon={faJava} className="icon" />
        <FontAwesomeIcon icon={faGitAlt} className="icon" />*/}
      </div>
    </div>
  );
}

export default Skills;
