import React, { useState } from "react";

function EditableTextArea({ text, setText }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div onClick={showForm}>
      {isFormVisible ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
}

export default EditableTextArea;
