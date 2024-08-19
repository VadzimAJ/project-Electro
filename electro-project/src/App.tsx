import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './HeaderBar';
import { StoreBar } from './StoreBar';

export type ElectroProductsType = {
  name: string
  cost: number
  count: number
}


function App() {

  const [electroProducts, setElectroProducts] = useState( [
    {name: 'Lamp', cost: 123, count: 0},
    {name: 'Pachcord', cost: 400, count: 0},
    {name: 'Transistor', cost: 300, count: 0},
  ])
  return (
    <div className="App">
      <HeaderBar/>
      <StoreBar 
        electroProducts = {electroProducts}
      />
    </div>
    
  );
}

export default App;
