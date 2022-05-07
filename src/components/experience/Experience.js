import React, { useState, useEffect } from "react";
import "./Experience.css";
import SectionTitle from "../section-title/SectionTitle.js";
import Job from "../job/Job.js";
import uniqid from "uniqid";

function Experience() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

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

  return (
    <div className="experience">
      <SectionTitle title={"experience"} hAlignment={"flex-end"}></SectionTitle>
      {jobs.map((job) => (
        <Job
          position={job.position}
          company={job.company}
          date={job.date}
          description={job.description}
          key={uniqid()}
        ></Job>
      ))}
    </div>
  );
}

export default Experience;
