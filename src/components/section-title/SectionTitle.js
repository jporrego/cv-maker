import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title, hAlignment }) {
  return (
    <div className="section-title" style={{ justifyContent: hAlignment }}>
      {title}
    </div>
  );
}

export default SectionTitle;
