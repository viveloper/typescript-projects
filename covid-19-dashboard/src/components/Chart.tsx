import React from 'react';

function Chart() {
  return (
    <div className="chart-container">
      <canvas
        id="lineChart"
        className="corona-chart"
        style={{
          width: '100%',
          height: '356px',
          backgroundColor: '#5b5656',
        }}
      ></canvas>
    </div>
  );
}

export default Chart;
