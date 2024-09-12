import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import running from './images/61Jys2MzMTS._AC_UF894,1000_QL80_.jpg'; 
import revolution from './images/7af3c9bb84a58a3dd3843ed1cdae93606f10c2cf_original.jpeg';
import revolution2 from './images/2710_grande.jpg';
import revolution3 from './images/Gray.jpg';
import neck from './images/accessories1.webp';
import neck2 from './images/accessories2.webp';
import neck3 from './images/accessories3.webp';
import neck4 from './images/accessories4.webp';
import HeaderIMG1 from "./images/Untitled Design(30).png";
import './product.css';
import { CartContext } from './totalPrice';

function Accessories() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 650.99,
      image: running
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 999.99,
      image: revolution
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 1299.99,
      image: revolution2
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 1350.99,
      image: revolution3
    },
  ];

  const necklaceData = [
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 650.99,
      image: neck
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 999.99,
      image: neck2
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 1299.99,
      image: neck3
    },
    {
      name: 'Smart Watch',
      description: 'Modern watch and fitness tracker',
      price: 1350.99,
      image: neck4
    },
  ];

  return (
    <div className="container">
      <img className='header-image' src={HeaderIMG1} alt='header'/>
      <span className='products-header-text'>Accessories</span>
      <hr></hr>
      <div className='row g-6'>
        <h2 className='section-header'>Smart Watches</h2>
          {productData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='card'>
                  <Card.Img className='product-image' variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: R{product.price ? product.price.toFixed(2) : ''}</Card.Text>
                    <Button className='btn-custom' onClick={() => addToCart(product)}>Purchase</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
      <hr></hr>
      <div className='row g-6'>
        <h2 className='section-header'>Nike Necklaces</h2>
          {necklaceData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='card'>
                  <Card.Img className='product-image' variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: R{product.price ? product.price.toFixed(2) : ''}</Card.Text>
                    <Button className='btn-custom' onClick={() => addToCart(product)}>Purchase</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Accessories;