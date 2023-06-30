import { useState } from "react";
import "./input-field.css";

export default function InputField({
  type,
  pattern,
  fieldName,
  title,
  validateInput,
}) {
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  function checkInput(event) {
    const pattern = event.target.pattern;
    const value = event.target.value;
    const regex = new RegExp(pattern);

    if (value === "") {
      setValidationMessage(`Bitte ${fieldName} eingeben`);
      validateInput(false);
    } else if (!regex.test(value)) {
      if (type !== "email") {
        setValidationMessage(title);
      }
      validateInput(false);
    } else {
      setValidationMessage("");
      validateInput(true);
    }
  }

  function checkInputOnLeave(event) {
    const pattern = event.target.pattern;
    const value = event.target.value;
    const regex = new RegExp(pattern);

    if (inputValue === "") {
      setValidationMessage(`Bitte ${fieldName} eingeben`);
      validateInput(false);
    } else if (!regex.test(value) && type === "email") {
      setValidationMessage(`Bitte E-Mail-Format prüfen: mail@beispiel.de`);
      validateInput(false);
    }
  }
  return (
    <div className="input-field-wrapper">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onInput={checkInput}
        onBlur={checkInputOnLeave}
        placeholder={fieldName}
        className="input-field"
        type={type}
        name={fieldName}
        id={fieldName}
        pattern={pattern}
        title={title}
        value={inputValue}
        minLength={1}
        maxLength={30}
        required
      />
      <p className="validation-message">{validationMessage}</p>
    </div>
  );
}
