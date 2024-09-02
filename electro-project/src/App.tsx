import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './HeaderBar';
import { StoreBar } from './StoreBar';
import { v1 } from 'uuid';

export type ElectroProductsType = {
  name: string
  cost: number
  count: number
}


function App() {

  const [electroProducts, setElectroProducts] = useState( [
    {id: v1(), name: 'Lamp', cost: 123, count: 0},
    {id: v1(), name: 'Pachcord', cost: 400, count: 0},
    {id: v1(), name: 'Transistor', cost: 300, count: 0},
  ])


  const upCounter = (count: number) => {
  }
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
