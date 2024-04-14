import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landingpage from './Components/LandingPage/Landingpage';
import PerProduct from './Components/Product/PerProduct';
import Products from './Components/Product/Products';


function App() {
  return (
    <div className="App">
      <Header />
      <Products/>
      
    </div>
  );
}

export default App;
