// TextInputComponent.jsx

import React, { useState } from "react";
import { Button, TextField, InputAdornment } from '@mui/material';
import "./input.css";
import { useNavigate } from 'react-router-dom';

const TextInputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      setInputValue("");
      return;
    }
  };
  const nav = useNavigate();

  const handleNav = () => {
  console.log("clicked");
  nav("../stats");
}
  return (
    <div className="textInputContainer">
      
      <TextField
        className="textInput"
        id="textInput"
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        value={inputValue}
        placeholder="Enter code here"
        onChange={handleInputChange}
        multiline
        maxRows={3}
      />     
      <Button onClick={handleNav} className='submit-button' variant="contained" sx={{backgroundColor: '#168FFF'}}>Submit</Button>
    </div>
  );
};

export default TextInputComponent;
