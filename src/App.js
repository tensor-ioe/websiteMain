import React from "react";
import ContactUsMap from "./components/contactUsMap";
import ContactUsForm from "./components/contactUsForm";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">Contact Us</h1>
      <ContactUsForm />
      <ContactUsMap />
    </div>
  );
};

export default App;

