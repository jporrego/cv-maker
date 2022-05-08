import React, { useState, useEffect } from "react";
import "./Experience.css";
import SectionTitle from "../section-title/SectionTitle.js";
import Job from "../job/Job.js";
import uniqid from "uniqid";

function Experience() {
  const [jobs, setJobs] = useState([]);

  /* Saving getJobs in case a backend is implemented later on.
  const getJobs = () => {
    const jobData = [
      {
        id: uniqid(),
        position: "Full Stack Developer",
        company: "Google",
        date: "November 2022-Present",
        description: "Asd",
      },
      {
        id: uniqid(),
        position: "Front End Developer",
        company: "Facebook",
        date: "November 2022-Present",
        description: "Bosoo",
      },
    ];

    setJobs(jobData);
  };
  */

  const addJob = () => {
    setJobs([...jobs, <Job></Job>]);
    console.log(jobs);
  };
  return (
    <div className="experience">
      <SectionTitle
        title={"experience"}
        hAlignment={"flex-end"}
        btn={"+"}
        btnOnClick={addJob}
      ></SectionTitle>
      {jobs.map((job) => job)}
    </div>
  );
}

export default Experience;
