import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate()

  const handleNavigate = () => {
      console.log("clicked");
      navigate("./chatbot");
  }
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
    <div className="navbar">
      <a href="#howItWorks" onClick={() => handleLinkClick("How It Works")} className="tutorial">
        How It Works
      </a>
      <a href="#about" onClick={() => handleLinkClick("About")} className="about">
        About
      </a>
      <a href="#docu" onClick={() => handleLinkClick("Documentation")} className="about">
        Documentation
      </a>
      <a href="#privacy" onClick={() => handleLinkClick("Privacy Policy")} className="privacy">
        Privacy Policy
      </a>
      <a href="#chat" onClick={() => handleNavigate("Assistant Chat")} className="chat">
        Assistant Chat
      </a>

      {activeLink && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{activeLink}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
