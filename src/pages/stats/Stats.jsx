import React from 'react';
import './stats.css';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';

const StatsComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("clicked");
    navigate("../");
}
  return (
    <div>   
      <div className='buttons'>
      <Button variant="outlined" sx = {{color: '#FF8911', marginTop: '3%'}} onClick={handleNavigate}>Return to main page</Button>
      <Button variant="outlined" sx = {{color: '#FF8911',marginTop: '3%'}}>redo</Button>
      <Button variant="outlined" sx = {{color: '#FF8911',marginTop: '3%'}}>Upload to GitHub</Button>

      </div>
    
    <div className="stats-container">
      <div className="row">
        <div className="stat">
          <div className="stat-value">x%</div>
          <div className="stat-label">Percentage of successful test cases: </div>
        </div>
        <div className="stat">
          <div className="stat-value">y%</div>
          <div className="stat-label">code coverage</div>
        </div>
      </div>
      <div className="row">
        <div className="stat">
          <div className="stat-value">t</div>
          <div className="stat-label">time taken for test case generation</div>
        </div>
        <div className="stat">
          <div className="stat-value">z</div>
          <div className="stat-label">number of times that the generators has run</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatsComponent;
