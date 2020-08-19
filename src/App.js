import React, {useState} from 'react';
import AddPerson from './Components/AddPerson';
import BillBreakdown from './Components/BillBreakdown';
import {BillProvider} from './Store/BillContext';
import './App.css';

function App() {
  
  return (
    <div className="App">
            
      <h1>Splitsies</h1>
      <h3>Cost Spltting Calculator</h3>
      
      <BillProvider>
        <div className="layout">
          <AddPerson />
          <BillBreakdown />
        </div>
      </BillProvider>
      <style jsx>{`
        h1{
          font-size: 2.5rem;
          margin:1rem 0 2rem 0;
          text-align: center;
        }
        h3{
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align:center;
        }
        .layout{
          display: grid;
          grid-rows: 1fr 1fr;

        }
      `}</style>
    </div>
  );
}

export default App;
