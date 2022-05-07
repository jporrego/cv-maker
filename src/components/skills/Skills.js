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
  /* ---------- Skills Component ----------
     --- States ---
     1. userSkills: Array of skills of the current user. Since this is just a front-end project 
                    it simply has the icons to be displayed.

     2. skillGallery: Array of all the skills the user can choose from.

     --- Logic ---

     The userSkills will be displayed as icons. When clicking the add button, a modal
     will open displaying skillGallery, showing skills the user can add to their profile.
     Skill gallery will always have the userSkills filtered out to avoid duplication.

  */
  const [userSkills, setUserSkills] = useState([]);
  const [skillGallery, setSkillGallery] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const allSkillsList = [
    faHtml5,
    faCss3Alt,
    faJsSquare,
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
    console.log(iconName);
  };

  const deleteSkill = (e) => {
    let iconName = "";

    if (e.target.parentNode.className === "icons-user") {
      iconName = e.target.attributes[3].value;
    } else {
      iconName = e.target.parentNode.attributes[3].value;
    }

    const editedUserSkills = [...userSkills].filter(
      (skill) => skill.iconName != iconName
    );
    setUserSkills(editedUserSkills);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const skillItems = userSkills.map((skill) => {
    return (
      <div className="icon-container">
        <FontAwesomeIcon
          key={skill.iconName}
          icon={skill}
          className="icon"
          onClick={deleteSkill}
        />
      </div>
    );
  });

  return (
    <div className="skills">
      <div className="skills-wrapper">
        <SectionTitle
          title={"skills"}
          btn={"+"}
          btnOnClick={showModal}
        ></SectionTitle>

        <div className="icons-user">{skillItems}</div>

        {isModalVisible && (
          <div className="icon-selection">
            {skillGallery.map((skill) => (
              <FontAwesomeIcon
                key={skill.iconName}
                icon={skill}
                className="icon"
                onClick={addSkill}
              />
            ))}
            <button className="btn-round btn--red" onClick={hideModal}>
              x
            </button>
          </div>
        )}
      </div>
      {isModalVisible && (
        <div className="close-modal" onClick={hideModal}></div>
      )}
    </div>
  );
}

export default Skills;
