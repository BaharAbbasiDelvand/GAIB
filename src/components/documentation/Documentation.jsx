import React, { useState } from "react";
import "./documentation.css";
import {TextField, Button} from '@mui/material';
import Popup from "../documentation-text/Popup";
const Documentation = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const closePopup = () => {
    setActiveLink(null);
  };

  const handleOverlayClick = (event) => {
    // Close the popup if the overlay (background) is clicked
    if (event.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return (
    <div className="documentation-container">
      <Button variant="contained" sx={{backgroundColor:'#D40000'}} onClick={() => handleLinkClick("Documentation")} className="documentation">
      Documentation
      </Button>

      {activeLink && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <Popup/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
