import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import './App.css';
import { CartProvider } from './components/totalPrice'; 
import { useState } from 'react';

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
            <h2 className='home_header'>TripleM</h2>
            <ul className='nav__links'>
              <li ><Link to="/" className='home_link'>Home</Link></li>
              <li ><Link to="/about" className='about_link'>About</Link></li>
              <li ><Link to="/Products" className='products_link'>Products</Link></li>
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
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;


