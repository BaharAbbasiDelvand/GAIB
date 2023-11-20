// StatsComponent.jsx

import React from 'react';
import './stats.css';

const StatsComponent = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <div className="stat-value">x%</div>
        <div className="stat-label">Percentage of successful test cases: </div>
      </div>
      <div className="stat">
        <div className="stat-value">y%</div>
        <div className="stat-label">code coverage</div>
      </div>
      <div className="stat">
        <div className="stat-value">t</div>
        <div className="stat-label">time taken for test case generation</div>
      </div>
      <div className="stat">
        <div className="stat-value">z</div>
        <div className="stat-label">number of times that the generators has run</div>
      </div>
    </div>
  );
};

export default StatsComponent;
