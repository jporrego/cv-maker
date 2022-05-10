import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Sophia Porter");
  const [ocupation, setOcupation] = useState("Full Stack Developer");
  const [profilePicture, setProfilePicture] = useState("../../../assets");
  const [showForm, setShowForm] = useState(false);

  const staticText = (
    <div className="profile-static-text" onClick={() => setShowForm(true)}>
      <div className="name-wrapper">
        <div className="name">{name}</div>
      </div>
      <div className="ocupation">{ocupation}</div>
      <div className="profile-pic"></div>
    </div>
  );

  const form = (
    <div className="profile-form">
      <input type="text" />
      <input type="text" />
      <input type="file" name="profile-pic" id="profile-pic" />
      <div className="buttons">
        <button className="btn-square btn--red" onClick={(e) => e}>
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
  return <div className="profile">{showForm ? form : staticText}</div>;
}

export default Profile;
