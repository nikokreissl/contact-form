import { useState } from "react";
import "./input-field.css";

export default function InputField({ type, pattern, fieldName, title }) {
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  function checkInput(event) {
    const pattern = event.target.pattern;
    const value = event.target.value;
    const regex = new RegExp(pattern);

    if (!regex.test(value)) {
      setValidationMessage(`Bitte ${fieldName} eingeben`);
    } else {
      setValidationMessage("");
    }
  }
  return (
    <div className="input-field-wrapper">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onInput={checkInput}
        onBlur={checkInput}
        placeholder={fieldName}
        className="input-field"
        type={type}
        name={fieldName}
        id={fieldName}
        pattern={pattern}
        title={title}
        value={inputValue}
        required
      />
      <p className="validation-message">{validationMessage}</p>
    </div>
  );
}
