import React, { useState } from "react";
import "./radio-button-group.css";
import RadioButton from "./Radio-Button";

export default function RadioButtonGroup({ validateInput }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    validateInput(event.target.value);
  };

  return (
    <div className="radio-button-container">
      <RadioButton
        value="Frau"
        position="left"
        isChecked={selectedValue === "Frau"}
        onUpdateSelection={handleRadioChange}
      />
      <RadioButton
        value="Mann"
        position="right"
        isChecked={selectedValue === "Mann"}
        onUpdateSelection={handleRadioChange}
      />
    </div>
  );
}
