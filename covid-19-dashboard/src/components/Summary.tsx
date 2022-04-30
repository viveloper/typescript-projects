import React from 'react';

function Summary() {
  return (
    <div className="summary-wrapper flex">
      <div className="deaths-container">
        <h3 className="summary-title">Total Deaths</h3>
        <p className="total deaths">0</p>
        <div className="list-wrapper">
          <ol className="deaths-list"></ol>
        </div>
      </div>
      <div className="recovered-container">
        <h3 className="summary-title">Total Recovered</h3>
        <p className="total recovered">0</p>
        <div className="list-wrapper">
          <ol className="recovered-list"></ol>
        </div>
      </div>
    </div>
  );
}

export default Summary;
