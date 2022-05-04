import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title }) {
  return (
    <div className="section-title" style={{ justifyContent: "flex-end" }}>
      {title}
    </div>
  );
}

export default SectionTitle;
