import React from "react";
import mapImage from "../../images/contactUs/mapImage.png";

const ContactUsMap = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir//...",
      "_blank"
    );
  };

  return (
    <>
    <div className="text-4xl md:text-6xl text-center text-blue-600">Find US</div>
    <div
      className="cursor-pointer flex justify-center items-center w-full h-64 rounded-lg overflow-hidden shadow-lg border-4 border-blue-500"
      onClick={handleMapClick}
    >
      <img
        src={mapImage}
        alt="Map"
        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
      />
    </div>
    </>
  );
};

export default ContactUsMap;
