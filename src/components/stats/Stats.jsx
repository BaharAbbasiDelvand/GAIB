// StatsComponent.jsx

import React from 'react';
import './stats.css';

const StatsComponent = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <div className="stat-value">25</div>
        <div className="stat-label">Percentage of successful test cases: </div>
      </div>
      <div className="stat">
        <div className="stat-value">50</div>
        <div className="stat-label">code coverage</div>
      </div>
      <div className="stat">
        <div className="stat-value">75</div>
        <div className="stat-label">Stat 3</div>
      </div>
      <div className="stat">
        <div className="stat-value">100</div>
        <div className="stat-label">Stat 4</div>
      </div>
    </div>
  );
};

export default StatsComponent;
