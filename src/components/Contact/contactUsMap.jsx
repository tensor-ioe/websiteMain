import React from "react";
import "./contactUsMap.css";
import mapImage from "../../images/contactUs/mapImage.png";

const ContactUsMap = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir//...",
      "_blank"
    );
  };

  return (
    <div className="map-container" onClick={handleMapClick}>
      <img src={mapImage} alt="Map" className="map-image" />
    </div>
  );
};

export default ContactUsMap;