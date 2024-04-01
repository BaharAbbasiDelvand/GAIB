import React, { useState } from "react";
import { Button } from "@mui/material";
import Howitworkstext from "./text";
const Hiw = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const closePopup = () => {
        setActiveLink(null);
    };

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains("popup-overlay")) {
            closePopup();
        }
    };

    return (
        <div className="documentation-container">
            <Button
                variant="outlined"
                sx={{ bcolor: "#FB8500", marginTop:'-30px'}}
                onClick={() => handleLinkClick("Documentation")}
                className="documentation"
                
            >
                What They Mean?
            </Button>

            {activeLink && (
                <div className="popup-overlay" onClick={handleOverlayClick}>
                    <div className="popup">
                        <span className="close" onClick={closePopup}>
                            &times;
                        </span>
                        <Howitworkstext/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hiw;