import React, { useEffect, useState } from "react";
import "./form.css";
import InputField from "./Input-Field";
import RadioButtonGroup from "./Radio-Button-Group";

export default function Form() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  function checkGender(event) {
    console.log(event.target.RadioButton);
  }

  return (
    <div className="form-wrapper">
      <form className={`form ${isLoaded ? "loaded" : ""}`}>
        <div>
          <InputField
            type="text"
            pattern="[A-Za-z\s\-]+"
            fieldName="Vorname"
            title="Nur Buchstaben, Leerzeichen und Bindestriche erlaubt"
          />
          <InputField
            type="text"
            pattern="[A-Za-z\s\-]+"
            fieldName="Nachname"
            title="Nur Buchstaben, Leerzeichen und Bindestriche erlaubt"
          />
        </div>
        <div>
          <InputField
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            fieldName="E-Mail-Adresse"
            title="Nur E-Mail-Format erlaubt: mail@beispiel.de"
          />
          <InputField
            typ="tel"
            pattern="[0-9+\-()/]+"
            fieldName="Telefonnummer"
            title="Nur Zahlen und Sonderzeichen +, -, /, (, ) erlaubt"
          />
        </div>
        <RadioButtonGroup />
        <button type="submit">Abschicken</button>
      </form>
    </div>
  );
}
