import React from 'react';
import ContactUsForm from './contactUsForm';
import ContactUsMap from './contactUsMap';

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-4xl font-extrabold text-center mt-10 mb-10 relative'>CONTACT US</h1>
      <div className="flex flex-col gap-10 w-full max-w-3xl">
        <ContactUsForm />
        <ContactUsMap />
      </div>
    </div>
  );
};

export default Contact;
