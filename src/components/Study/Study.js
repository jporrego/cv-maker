import React, { useState } from "react";
import "./Study.css";

function Study({ id, title, university, date, onDelete }) {
  const [studyData, setstudyData] = useState({
    title: title,
    university: university,
    date: date,
  });
  const [showForm, setShowForm] = useState(false);

  const editStudy = (e) => {
    const newstudyData = { ...studyData };
    const inputId = e.target.id;
    const inputValue = e.target.value;
    newstudyData[inputId] = inputValue;
    setstudyData(newstudyData);
  };

  const staticText = (
    <div className="static-text" onClick={() => setShowForm(true)}>
      <div className="title">{studyData.title}</div>
      <div className="university">{studyData.university}</div>
      <div className="date">{studyData.date}</div>
    </div>
  );

  const form = (
    <form className="study-form">
      <input
        type="text"
        value={studyData.title}
        id="title"
        className="title-input"
        placeholder="title"
        onChange={(e) => editStudy(e)}
        maxLength={40}
      />
      <input
        type="text"
        value={studyData.university}
        id="university"
        className="university-input"
        placeholder="university"
        onChange={(e) => editStudy(e)}
        maxLength={40}
      />
      <input
        type="text"
        value={studyData.date}
        id="date"
        className="date-input"
        placeholder="December 2020 - Present"
        onChange={(e) => editStudy(e)}
        maxLength={20}
      />

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
    </form>
  );

  return <div className="study">{showForm ? form : staticText}</div>;
}

export default Study;
