import React from 'react';
import ContactUsForm from './contactUsForm';
import ContactUsMap from './contactUsMap';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-content">
        <ContactUsForm />
        <ContactUsMap />
      </div>
    </div>
  );
};

export default Contact;
