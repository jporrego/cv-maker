import React, { useState, useEffect } from "react";
import "./Education.css";
import SectionTitle from "../section-title/SectionTitle.js";
import Study from "../study/Study.js";
import uniqid from "uniqid";

function Education() {
  const [studies, setStudies] = useState([]);
  useEffect(() => {
    getInitialStudies();
  }, []);

  const getInitialStudies = () => {
    const studiesData = [
      {
        id: uniqid(),
        title: "Title",
        university: "Place of education",
        date: "yyyy-yyyy",
      },
    ];

    setStudies(studiesData);
  };

  const addStudy = () => {
    if (studies.length < 5) {
      setStudies([
        ...studies,
        {
          id: uniqid(),
          title: "Title",
          university: "Place of education",
          date: "yyyy-yyyy",
        },
      ]);
    }
  };

  const deletestudy = (e, id) => {
    e.preventDefault();
    const newStudiesArray = [...studies].filter((study) => study.id !== id);
    setStudies(newStudiesArray);
  };

  const studyElements = studies.map((study) => {
    return (
      <Study
        key={study.id}
        id={study.id}
        title={study.title}
        university={study.university}
        date={study.date}
        onDelete={deletestudy}
      ></Study>
    );
  });

  return (
    <div className="education">
      <SectionTitle
        title={"education"}
        btn={"+"}
        btnOnClick={addStudy}
      ></SectionTitle>
      {studyElements}
    </div>
  );
}

export default Education;
