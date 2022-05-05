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
  /* ---------- Skills Component ----------*/
  /* --- States ---
     1. userSkills: Array of skills of the current user. Since this is just a front-end project 
                    it simply has the icons to be displayed.

     2. skillGallery: Array of all the skills the user can choose from.

     --- Logic ---

     The userSkills will be displayed as icons. When clicking the add button, a modal
     will open displaying skillGallery, showing skills the user can add to their profile.
     Skill gallery will always have the userSkills filtered out to avoid duplication.

  */
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
  }, [userSkills]);

  const loadSkillGallery = () => {
    setSkillGallery(
      allSkillsList.filter((skill) => !userSkills.includes(skill))
    );
  };

  const addSkill = (e) => {
    let iconName = "";

    if (e.target.parentNode.className === "icon-selection") {
      iconName = e.target.attributes[3].value;
    } else {
      iconName = e.target.parentNode.attributes[3].value;
    }
    const newIcon = allSkillsList.filter(
      (skill) => skill.iconName === iconName
    );

    setUserSkills([...userSkills, newIcon[0]]);
    console.log(userSkills);
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
