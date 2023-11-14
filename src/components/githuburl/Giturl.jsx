// GitHubTextBox.js

import React, { useState } from 'react';
import './giturl.css';

const GitHubTextBox = ({ onSubmit }) => {
  const [githubUrl, setGithubUrl] = useState('');

  const handleChange = (event) => {
    setGithubUrl(event.target.value);
  };

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') {
      onSubmit(githubUrl);
      // Optionally, you may want to clear the input after submission
      setGithubUrl('');
    } else {
      console.error("onSubmit prop is not a function");
    }
  };

  return (
    <div className="github-textbox-container">
      <input
        type="text"
        placeholder="Enter GitHub URL"
        value={githubUrl}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GitHubTextBox;
