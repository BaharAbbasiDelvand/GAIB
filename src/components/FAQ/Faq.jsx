import React, { useState } from "react";
import "./faq.css";
import {TextField, Button} from '@mui/material';
const Faq = () => {
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
        <div className="faqcontainer">
        <Button variant="contained" sx={{backgroundColor:'#FB8500'}} onClick={() => handleLinkClick("Documentation")} className="documentation">
        FAQs
        </Button>

    
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

export default Faq;
