import React from "react";
import EditableTextArea from "../editable/editable-text-area/EditableTextArea.js";
import "./Job.css";

function Job({ position, company, date, description }) {
  return (
    <div className="job">
      {/*<div className="static-text">
        <div className="position">{position}</div>
        <div className="company">{company}</div>
        <div className="date">{date}</div>
        <p className="description">{description}</p>
      </div>*/}
      <div className="job-form">
        <input
          type="text"
          name="position"
          id="position"
          className="position-input"
          placeholder="Position"
        />
        <input
          type="text"
          name="company"
          id="company"
          className="company-input"
          placeholder="Company"
        />
        <input
          type="text"
          name="date"
          id="date"
          className="date-input"
          placeholder="Date"
        />
        <textarea
          maxLength={180}
          className="description-input"
          placeholder="Description"
        ></textarea>
      </div>
    </div>
  );
}

export default Job;
