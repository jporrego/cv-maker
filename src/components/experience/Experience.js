import React, { useState, useEffect } from "react";
import "./Experience.css";
import SectionTitle from "../section-title/SectionTitle.js";
import Job from "../job/Job.js";
import uniqid from "uniqid";

function Experience() {
  const [jobs, setJobs] = useState([]);

  /*
  const getJobs = () => {
    const jobData = [
      {
        id: uniqid(),
        position: "Full Stack Developer",
        company: "Google",
        date: "November 2022-Present",
        description:
          "Worked as a developer for a long time. Etc etc it as as dkasd.Worked as a developer for a long time. Etc etc it as as dkasd.Worked as a developer for a long time. Etc etc it as as ",
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
  };*/

  const addJob = () => {
    /*
    const loadDefaultJobs = true;

    if (loadDefaultJobs) {
      // later
    }*/
    if (jobs.length < 3) {
      const newKey = uniqid();
      setJobs([
        ...jobs,
        <Job
          key={newKey}
          id={newKey}
          position={"Position"}
          company={"Company"}
          date={"2020 - Present"}
          description={"Description"}
          onDelete={deleteJob}
        ></Job>,
      ]);
    }
  };

  function deleteJob(e, id) {
    e.preventDefault();
    const newJobsArray = [...jobs].filter((job) => job.key != id);
    setJobs(newJobsArray);
  }

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
