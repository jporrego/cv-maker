import React, { useState, useEffect } from "react";
import "./Experience.css";
import SectionTitle from "../section-title/SectionTitle.js";
import Job from "../job/Job.js";
import uniqid from "uniqid";

function Experience() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getInitialJobs();
  }, []);

  const getInitialJobs = () => {
    const jobData = [
      {
        id: uniqid(),
        position: "Position",
        company: "Company",
        date: "month yyyy - month yyyy",
        description: "Brief job description",
      },
    ];

    setJobs(jobData);
  };

  const addJob = () => {
    if (jobs.length < 3) {
      const newKey = uniqid();
      setJobs([
        ...jobs,
        {
          key: newKey,
          id: newKey,
          position: "Position",
          company: "Company",
          date: "2020 - Present",
          description: "Description",
          onDelete: { deleteJob },
        },
      ]);
    }
  };

  function deleteJob(e, id) {
    e.preventDefault();
    const newJobsArray = [...jobs].filter((job) => job.id !== id);
    setJobs(newJobsArray);
  }

  const jobElements = jobs.map((job) => {
    return (
      <Job
        key={job.id}
        id={job.id}
        position={job.position}
        company={job.company}
        date={job.date}
        description={job.description}
        onDelete={deleteJob}
      ></Job>
    );
  });

  return (
    <div className="experience">
      <SectionTitle
        title={"experience"}
        hAlignment={"flex-end"}
        btn={"+"}
        btnOnClick={addJob}
      ></SectionTitle>
      {jobElements}
    </div>
  );
}

export default Experience;
