
import React, { useState } from "react";
import "./giturl.css";
import { Button, TextField, InputAdornment, colors } from "@mui/material";

const GitHubTextBox = ({ onSubmit }) => {
  const [token, setToken] = useState('');
  const [githubUrl, setGithubUrl] = useState("");
  const handleAccessToken = (e) => {
    setToken(e.target.value);
};
  const handleChange = (event) => {
    setGithubUrl(event.target.value);
  };

  const handleSubmit = () => {
      setGithubUrl("");
      setToken('');
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      setGithubUrl("");
      setToken('');
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
      <Button className= 'btnn' onClick={handleSubmit} variant = "contained" sx={{backgroundColor: '#168FFF'}}>Submit</Button>
      <TextField
        required
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="accesstoken"
        id="outlined-required"
        value={token}
        placeholder="Enter GitHub Access Token"
        label="GitHub Access Token"
        onChange={handleAccessToken}
        onKeyDown={(event) => handleKeyDown(event)}
        />
    </div>
    
  );
};

export default GitHubTextBox;
