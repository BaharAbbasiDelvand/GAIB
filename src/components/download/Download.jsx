import React from 'react';
import Button from '@mui/material/Button';

const handleDownload = () => {
  window.open("https://marketplace.visualstudio.com/items?itemName=GAIB.genai", "_blank");

  
};

const DownloadButton = () => {
  return (
    <Button variant="contained" onClick={handleDownload} sx={{color:'#EFFCFF', backgroundColor:'#9C27B0'}}>
      Download the Extension
    </Button>
  );
};

export default DownloadButton;
