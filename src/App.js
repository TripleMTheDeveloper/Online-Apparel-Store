import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Gym from './components/GymEquipment';
import Accessories from './components/Accessories';
import Socks from './components/Socks';
import Shoes from './components/Shoes';
import './App.css';
import { CartProvider } from './components/totalPrice'; 
import { useState } from 'react';
import Logo from './components/images/Untitled_Design_34_-removebg-preview.png';

function App() { //rending all our components

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <Router>
      <CartProvider>  {/*Wrapping the entire app in CartProvider context so I can display the cart price in all components*/}
        <div className="App">
          <nav className='nav__bar'>
            <img className='logo' src={Logo} alt="My image description" />
            <ul className='nav__links'>
              <li ><Link to="/" className='home_link'>Home</Link></li>
              <li ><Link to="/Accessories" className='products_link'>Accessories</Link></li>
              <li ><Link to="/Womens" className='womens_link'>Women</Link></li>
              <li ><Link to="/Mens" className='mens_link'>Men</Link></li>
            </ul>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search_bar"
            />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Womens" element={<Womens />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Gym" element={<Gym />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Socks" element={<Socks />} />
            <Route path="/Shoes" element={<Shoes />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;


