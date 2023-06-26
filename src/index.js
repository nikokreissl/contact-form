import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderBar from "./components/Header-Bar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderBar />
    <h1>Hello</h1>
  </React.StrictMode>
);
