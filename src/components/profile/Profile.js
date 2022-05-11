import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Sophia Porter");
  const [ocupation, setOcupation] = useState("Full Stack Developer");
  const [phone, setPhone] = useState("(212)-456-7890");
  const [email, setEmail] = useState("sporter@gmail.com");
  const [profilePicture, setProfilePicture] = useState("../../../assets");
  const [showForm, setShowForm] = useState(false);

  const staticText = (
    <div className="profile-static-text">
      <div className="name-wrapper">
        <div className="name" onClick={() => setShowForm(true)}>
          {name}
        </div>
      </div>
      <div className="ocupation" onClick={() => setShowForm(true)}>
        {ocupation}
      </div>
      <div className="contact" onClick={() => setShowForm(true)}>
        {email}
        {phone}
      </div>
    </div>
  );

  const form = (
    <div className="profile-form">
      <input
        type="text"
        className="profile-form-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        className="profile-form-ocupation"
        value={ocupation}
        onChange={(e) => setOcupation(e.target.value)}
        placeholder="Ocupation"
      />
      <div className="profile-form-contact">
        <input
          type="email"
          className="profile-form-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="tel"
          className="profile-form-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
        />
      </div>
      <div className="buttons">
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
