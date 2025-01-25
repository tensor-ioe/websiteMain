import React from 'react';
import ContactUsForm from './contactUsForm';
import ContactUsMap from './contactUsMap';

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-5 gap-5">
      <h1 className="text-4xl md:text-6xl text-center text-blue-600">CONTACT US</h1>
      <div className="flex flex-col gap-10 w-full max-w-3xl">
        <ContactUsForm />
        <ContactUsMap />
      </div>
    </div>
  );
};

export default Contact;
