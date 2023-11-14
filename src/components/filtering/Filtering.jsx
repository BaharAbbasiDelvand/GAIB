import React, { useState } from "react";
import "./filtering.css";
const DropdownCheckboxComponent = () => {
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
      <button onClick={toggleDropdown} className="dropdown-button">
        {isOpen ? "Close Filters" : "Filter options"}
      </button>
      {isOpen && (
        <div className="checkbox-dropdown">
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option1}
              onChange={() => handleCheckboxChange("option1")}
            />
            Option 1
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option2}
              onChange={() => handleCheckboxChange("option2")}
            />
            Option 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option3}
              onChange={() => handleCheckboxChange("option3")}
            />
            Option 3
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option4}
              onChange={() => handleCheckboxChange("option4")}
            />
            Option 4
          </label>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckboxComponent;
