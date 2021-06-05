import React, { useContext } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import InputValue from '../src/component/inputValue';
import History from '../src/component/history';
import Bar from './component/Bar'


import { DataProvider, DataContext } from './Contexts/dataContext';


export default function () {
  return (
    <div className="App">
      <DataProvider>
        <h1>BMI Tracker</h1>
        <InputValue />
        <Bar />
        <h2>History</h2>
        <History />
      </DataProvider>
    </div>

  );
}

