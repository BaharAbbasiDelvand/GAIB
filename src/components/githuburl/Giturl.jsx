
import React, { useState } from "react";
import "./giturl.css";
import { Button, TextField, InputAdornment, colors } from "@mui/material";

const GitHubTextBox = ({ onSubmit }) => {
  const [githubUrl, setGithubUrl] = useState("");

  const handleChange = (event) => {
    setGithubUrl(event.target.value);
  };

  const handleSubmit = () => {
      setGithubUrl("");
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      setGithubUrl("");
      return;
    }
  };

  return (
    <div className="github-textbox-container">
      <TextField
      required
      label="Required"
      defaultValue="Hello World"
        variant="filled"
        className="github-text"
        id="outlined-start-adornment"
        sx={{ m: 1}}
        placeholder="Enter your Github repository"
        value = {githubUrl}
        onChange={handleChange}
        onKeyDown={(event) => handleKeyDown(event)}
        InputProps={{
          startAdornment: <InputAdornment position="start">https://github.com/</InputAdornment>,
        }}
      />
      <Button className= 'KLR' onClick={handleSubmit} variant = "contained" sx={{backgroundColor: '#168FFF'}}>Submit</Button>
    </div>
  );
};

export default GitHubTextBox;
