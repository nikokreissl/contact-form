import React, { useState, useEffect } from "react";
import "./submitted-text.css";

export default function SubmittedText({ onBacktoForm }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`submitted-page-container ${isLoaded ? "loaded" : ""}`}>
      <div className="submitted-text-container">
        <h1 className="submitted-headline">Kontaktdaten abgeschickt</h1>
        <p>Deine Kontaktdaten wurden erfolgreich abgeschickt, vielen Dank!</p>
        <p>
          Wir werden uns in Kürze mit dir in Verbinung setzen und dein Anliegen
          besprechen.
        </p>
      </div>
      <p onClick={onBacktoForm} className="back-to-form">
        ⬅ Zurück zum Formular
      </p>
    </div>
  );
}
