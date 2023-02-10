import React from "react";
import "../edit/edit.css";
const Input = (props) => {
  const { inputType, label, data, setData } = props;
  return (
    <>
      <label>{label}</label>
      {inputType ? (
        <textarea
          className="edit-about"
          onChange={(e) => setData(e.target.value)}
          placeholder={data}
        />
      ) : (
        <input
          className="edit-input"
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
