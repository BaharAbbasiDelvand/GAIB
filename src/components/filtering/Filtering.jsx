import React, { useState } from "react";
import {Button} from '@mui/material'
import "./filtering.css";
const Filtering = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    setCheckboxes({
      ...checkboxes,
      [option]: !checkboxes[option],
    });
  };

  return (
    <div className="dropdown-checkbox-container">
      <Button variant="contained" onClick={toggleDropdown} className="dropdown-button" sx={{
          backgroundColor: '#17CB49',
          color: "black",
          '&:hover': {
            backgroundColor: '#128F2C', // Change color on hover
          },
          '&:active': {
            backgroundColor: '#0D6A20', // Change color on click
          },
        }}>
        {isOpen ? "Close Filters" : "Filter options"}
      </Button>
      {isOpen && (
        <div className="checkbox-dropdown">
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option1}
              onChange={() => handleCheckboxChange("option1")}
            />
            testcase 1
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option2}
              onChange={() => handleCheckboxChange("option2")}
            />
            testcase 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option3}
              onChange={() => handleCheckboxChange("option3")}
            />
            testcase 3
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option4}
              onChange={() => handleCheckboxChange("option4")}
            />
            testcase 4
          </label>
        </div>
      )}
    </div>
  );
};

export default Filtering;
