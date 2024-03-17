import React from 'react';
import Button from '@mui/material/Button';

const handleDownload = () => {
  // dummy file  
  const fileContent = 'This is a test file content';
  const blob = new Blob([fileContent], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.href = window.URL.createObjectURL(blob);
  anchor.download = 'example.txt';

  anchor.click();

  //remove the anchor
  window.URL.revokeObjectURL(anchor.href);
};

const DownloadButton = () => {
  return (
    <Button variant="contained" onClick={handleDownload} sx={{color:'#EFFCFF', backgroundColor:'#9C27B0'}}>
      Download the Extension
    </Button>
  );
};

export default DownloadButton;
