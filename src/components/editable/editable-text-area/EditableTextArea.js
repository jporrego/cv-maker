import React, { useState } from "react";
import "./EditableTextArea.css";
import editIcon from "../../../assets/icons/edit-3.svg";

function EditableTextArea({ text, setText }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editBtnVisisble, setEditBtnVisisble] = useState(false);
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const showEditBtn = () => {
    if (!editBtnVisisble) {
      setEditBtnVisisble(true);
    }
  };

  const hideEditBtn = () => {
    const timer = setTimeout(() => {
      setEditBtnVisisble(false);
    }, 500);
  };

  const staticText = (
    <div className="static-text">
      <div onClick={showForm}>{text}</div>
    </div>
  );

  const editableText = (
    <div className="editable-text">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="button" onClick={showForm}>
        Save
      </button>
    </div>
  );

  return (
    <div>
      <div
        className="editable-text-area"
        onMouseEnter={showEditBtn}
        onMouseLeave={hideEditBtn}
      >
        {isFormVisible ? editableText : staticText}
      </div>
      {isFormVisible && <div className="close-modal" onClick={showForm}></div>}
    </div>
  );
}

export default EditableTextArea;
