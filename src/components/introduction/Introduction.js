import { useState } from "react";
import "./Introduction.css";
import SectionTitle from "../section-title/SectionTitle.js";
import EditableTextArea from "../editable/editable-text-area/EditableTextArea.js";

function Introduction() {
  const [introValue, setIntroValue] = useState("Introduction...");

  return (
    <div className="introduction">
      <SectionTitle
        title={"Introduction"}
        hAlignment={"flex-end"}
      ></SectionTitle>
      <EditableTextArea
        text={introValue}
        setText={setIntroValue}
      ></EditableTextArea>
    </div>
  );
}

export default Introduction;
