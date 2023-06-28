import React from "react";
import "./radio-buttons.css";
import RadioButtonImage from "./Radio-Button-Image";

export default function RadioButton({
  value,
  position,
  isChecked,
  onUpdateSelection,
}) {
  return (
    <>
      <input
        className="input-button"
        type="radio"
        name="gender"
        id={value}
        value={value}
        checked={isChecked}
        onChange={onUpdateSelection}
        required
      />
      <label
        className={`input-label ${
          position === "left" ? "left-button" : "right-button"
        }`}
        htmlFor={value}
      >
        <RadioButtonImage value={value} isChecked={isChecked} />
        {value}
      </label>
    </>
  );
}
