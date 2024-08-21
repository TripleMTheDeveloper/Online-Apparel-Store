import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import './App.css';
import { CartProvider } from './components/totalPrice'; 

function App() { //rending all our components
  return (
    <Router>
      <CartProvider>  {/*Wrapping the entire app in CartProvider context so I can display the cart price in all components*/}
        <div className="App">
          <nav className='nav__bar'>
            <button>TripleM</button>
            <ul className='links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/Products">Products</Link></li>
            </ul>
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


