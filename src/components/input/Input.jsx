// TextInputComponent.jsx

import React, { useState } from 'react';
import Button from './button/Button'; 
import './input.css';

const TextInputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Form submitted! Input value:', inputValue);
  };

  return (
    <div className="textInputContainer">
      <label htmlFor="textInput">
        <textarea
          id="textInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your code here"
          style={{ width: '100%', height: 'auto' }}
        />
      </label>

      
      <div className="buttonContainer">
        <Button onClick={handleSubmit} label="Submit" />
      </div>
    </div>
  );
};

export default TextInputComponent;
