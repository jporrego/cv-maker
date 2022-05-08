import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title, hAlignment, btn, btnOnClick }) {
  return (
    <div className="section-title" style={{ justifyContent: hAlignment }}>
      {hAlignment && btn && (
        <button className="btn-round btn--yellow" onClick={btnOnClick}>
          {btn}
        </button>
      )}
      {title}
      {!hAlignment && btn && (
        <button className="btn-round btn--yellow" onClick={btnOnClick}>
          {btn}
        </button>
      )}
    </div>
  );
}

export default SectionTitle;
