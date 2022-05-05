import { useState } from "react";
import "./Introduction.css";
import SectionTitle from "../section-title/SectionTitle.js";
import EditableTextArea from "../editable/editable-text-area/EditableTextArea.js";

function Introduction() {
  const [introValue, setIntroValue] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad ratione dignissimos iste beatae illo veniam vel facere rem tenetur    doloremque dicta quibusdam, sed quisquam voluptatibus laudantium, fuga    fugiat velit."
  );

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
