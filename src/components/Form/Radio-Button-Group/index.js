import React, { useState } from "react";
import "./radio-button-group.css";
import RadioButton from "./Radio-Button";

export default function RadioButtonGroup() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="radio-button-container">
      <RadioButton
        value="Female"
        position="left"
        isChecked={selectedValue === "Female"}
        onUpdateSelection={handleRadioChange}
      />
      <RadioButton
        value="Male"
        position="right"
        isChecked={selectedValue === "Male"}
        onUpdateSelection={handleRadioChange}
      />
    </div>
  );
}
