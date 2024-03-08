import React, { useState } from "react";
import { Button, Input } from '@mui/material'; // Change the import to Input
import "./upload.css";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="upload">
      <Input
        accept=".js" 
        type="file"
        id="upload-input"
        onChange={handleFileChange}
        sx={{ display: 'none' }} 
      />
      <label htmlFor="upload-input">
        <Button component="span" variant="contained" sx={{ backgroundColor: '#168FFF' }}>
          Upload code file
        </Button>
      </label>
    </div>
  );
};

export default UploadFile;
