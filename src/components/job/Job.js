import React, { useState } from "react";
import EditableTextArea from "../editable/editable-text-area/EditableTextArea.js";
import "./Job.css";

function Job({ id, position, company, date, description, onDelete }) {
  const [jobData, setJobData] = useState({
    position: position,
    company: company,
    date: date,
    description: description,
  });
  const [showForm, setShowForm] = useState(false);

  const editJob = (e) => {
    const newJobData = { ...jobData };
    const inputId = e.target.id;
    const inputValue = e.target.value;
    newJobData[inputId] = inputValue;
    setJobData(newJobData);
  };

  const staticText = (
    <div className="static-text" onClick={() => setShowForm(true)}>
      <div className="position">{jobData.position}</div>
      <div className="company">{jobData.company}</div>
      <div className="date">{jobData.date}</div>
      <p className="description">{jobData.description}</p>
    </div>
  );

  const form = (
    <div className="job-form">
      <input
        type="text"
        value={jobData.position}
        id="position"
        className="position-input"
        placeholder="Position"
        onChange={(e) => editJob(e)}
        maxLength={40}
      />
      <input
        type="text"
        value={jobData.company}
        id="company"
        className="company-input"
        placeholder="Company"
        onChange={(e) => editJob(e)}
        maxLength={40}
      />
      <input
        type="text"
        value={jobData.date}
        id="date"
        className="date-input"
        placeholder="December 2020 - Present"
        onChange={(e) => editJob(e)}
        maxLength={20}
      />

      <textarea
        maxLength={180}
        value={jobData.description}
        id="description"
        className="description-input"
        placeholder="Description"
        onChange={(e) => editJob(e)}
      ></textarea>
      <div className="buttons">
        <button
          className="btn-square btn--red"
          onClick={(e) => onDelete(e, id)}
        >
          Delete
        </button>
        <button
          className="btn-square btn--purple"
          onClick={() => setShowForm(false)}
        >
          Save
        </button>
      </div>
    </div>
  );

  return <div className="job">{showForm ? form : staticText}</div>;
}

export default Job;
