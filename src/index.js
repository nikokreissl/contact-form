import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderBar from "./components/Header-Bar";
import Form from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderBar />
    <Form />
  </React.StrictMode>
);
