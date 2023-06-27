import React, { useState } from "react";
import "./radio-button-group.css";
import RadioButton from "./Radio-Button";

export default function RadioButtonGroup() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log(selectedValue);

  return (
    <div className="radio-button-container">
      <RadioButton
        value="Female"
        position="left"
        checked={selectedValue === "Female"}
        onUpdateSelection={handleRadioChange}
      />
      <RadioButton
        value="Male"
        position="right"
        checked={selectedValue === "Male"}
        onUpdateSelection={handleRadioChange}
      />
    </div>
  );
}
