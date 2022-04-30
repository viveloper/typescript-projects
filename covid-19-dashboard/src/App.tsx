import React, { useEffect, useState } from 'react';
import CountryRanks from './components/CountryRanks';
import Header from './components/Header';
import Summary from './components/Summary';
import TotalBoard from './components/TotalBoard';
import Chart from './components/Chart';
import axios, { AxiosResponse } from 'axios';
import { CovidSummaryResponse } from './types';

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-panel flex column">
          <TotalBoard />
          <CountryRanks />
          <p className="last-updated-time flex justify-center align-center"></p>
        </div>
        <div className="right-panel">
          <Summary />
          <Chart />
        </div>
      </main>
    </>
  );
}

export default App;
