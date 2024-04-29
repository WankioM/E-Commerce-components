import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landingpage from './Components/LandingPage/Landingpage';
import PerProduct from './Components/Product/PerProduct';
import Products from './Components/Product/Products';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Products/>
      <Footer />
      
    </div>
  );
}

export default App;
