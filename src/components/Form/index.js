import React, { useEffect, useState } from "react";
import "./form.css";
import InputField from "./Input-Field";
import RadioButtonGroup from "./Radio-Button-Group";
import SubmittButton from "./Submit-Button";
import SubmittedText from "../Submitted-Text";

export default function Form() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setlastNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [genderInput, setGenderInput] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  function checkFirstNameValidation(input) {
    setFirstNameValidation(input);
  }

  function checkLastNameValidation(input) {
    setlastNameValidation(input);
  }

  function checkEmailValidation(input) {
    setEmailValidation(input);
  }

  function checkPhoneValidation(input) {
    setPhoneValidation(input);
  }

  function checkGenderInput(input) {
    setGenderInput(input);
  }

  function changeSubmitValue() {
    setSubmitted(!submitted);
    setEmailValidation(false);
    setFirstNameValidation(false);
    setlastNameValidation(false);
    setPhoneValidation(false);
    setGenderInput(false);
  }

  return submitted ? (
    <SubmittedText onBacktoForm={changeSubmitValue} />
  ) : (
    <div className="form-wrapper">
      <form
        onSubmit={(event) => event.preventDefault()}
        className={`form ${isLoaded ? "loaded" : ""}`}
      >
        <InputField
          type="text"
          pattern="^[a-zA-ZäöüÄÖÜß\s-]*$"
          fieldName="Vorname"
          title='Nur Buchstaben, Leerzeichen und "-" erlaubt'
          validateInput={checkFirstNameValidation}
        />
        <InputField
          type="text"
          pattern="^[a-zA-ZäöüÄÖÜß\s-]*$"
          fieldName="Nachname"
          title='Nur Buchstaben, Leerzeichen und "-" erlaubt'
          validateInput={checkLastNameValidation}
        />
        <InputField
          type="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          fieldName="E-Mail-Adresse"
          title="Nur E-Mail-Format erlaubt: mail@beispiel.de"
          validateInput={checkEmailValidation}
        />
        <InputField
          typ="tel"
          pattern="[0-9+\-()/]+"
          fieldName="Telefonnummer (inkl. Vorwahl)"
          title="Nur Zahlen und Sonderzeichen +, -, /, (, ) erlaubt"
          validateInput={checkPhoneValidation}
        />
        <RadioButtonGroup validateInput={checkGenderInput} />
        <SubmittButton
          disabled={
            !firstNameValidation ||
            !lastNameValidation ||
            !emailValidation ||
            !phoneValidation ||
            !genderInput
          }
          onSubmitForm={changeSubmitValue}
        />
      </form>
    </div>
  );
}
