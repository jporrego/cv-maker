import React, { useState, useEffect } from "react";
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
import { icon } from "@fortawesome/fontawesome-svg-core";

function Skills() {
  const [userSkills, setUserSkills] = useState([faJsSquare, faHtml5]);
  const [skillGallery, setSkillGallery] = useState([]);

  const allSkillsList = [
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faReact,
    faNode,
    faPython,
    faJava,
    faPhp,
    faGitAlt,
  ];

  useEffect(() => {
    loadSkillGallery();
  }, []);

  const loadSkillGallery = () => {
    setSkillGallery(
      allSkillsList.filter((skill) => !userSkills.includes(skill))
    );
  };

  const addSkill = (e) => {
    let iconName = "";
    let editedName;
    if (e.target.parentNode.className === "icon-selection") {
      iconName = e.target.attributes[3].value;
    } else {
      iconName = e.target.parentNode.attributes[3].value;
    }

    let splitName = iconName.replace("-", " ").split(" ");
    splitName = splitName.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1)
    );

    editedName = `fa${splitName.join("")}`;
    console.log(editedName);
  };

  const skillItems = userSkills.map((skill) => {
    return (
      <FontAwesomeIcon key={skill.iconName} icon={skill} className="icon" />
    );
  });

  return (
    <div className="skills">
      <SectionTitle title={"skills"}></SectionTitle>

      <div className="icons-user">{skillItems}</div>

      <div className="icon-selection">
        {skillGallery.map((skill) => (
          <FontAwesomeIcon
            key={skill.iconName}
            icon={skill}
            className="icon"
            onClick={addSkill}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
