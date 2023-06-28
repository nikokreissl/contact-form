import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
