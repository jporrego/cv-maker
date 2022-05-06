import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title, hAlignment, btn, btnOnClick }) {
  return (
    <div className="section-title" style={{ justifyContent: hAlignment }}>
      {title}
      {btn && <button onClick={btnOnClick}>{btn}</button>}
    </div>
  );
}

export default SectionTitle;
