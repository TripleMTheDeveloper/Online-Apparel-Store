import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Gym from './components/GymEquipment';
import './App.css';
import { CartProvider } from './components/totalPrice'; 
import { useState } from 'react';
import Logo from './components/images/Untitled_Design__36_-removebg-preview.png';

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
              <li ><Link to="/About" className='about_link'>About</Link></li>
              <li ><Link to="/Products" className='products_link'>Products</Link></li>
              <li ><Link to="/Womens" className='womens_link'>Women's</Link></li>
              <li ><Link to="/Mens" className='mens_link'>Men's</Link></li>
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
            <Route path="/About" element={<About />} />
            <Route path="/Womens" element={<Womens />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Gym" element={<Gym />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;


