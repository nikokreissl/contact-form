import React from "react";
import "./radio-buttons.css";
import FemaleStickFigure from "../../../Stick-Figures/Female";
import MaleStickFigure from "../../../Stick-Figures/Male";

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
        {value === "Frau" ? (
          <FemaleStickFigure
            size={50}
            colorActive="var(--white)"
            colorInactive="var(--placeholder-color)"
            trigger={isChecked}
          />
        ) : (
          <MaleStickFigure
            size={50}
            colorActive="var(--white)"
            colorInactive="var(--placeholder-color)"
            trigger={isChecked}
          />
        )}
        {value}
      </label>
    </>
  );
}
