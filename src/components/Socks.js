import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import running from './images/running.jpg'; 
import revolution from './images/revolution.png';
import revolution2 from './images/revolution2.jpg';
import revolution3 from './images/revolution3.jpg';
import revolution4 from './images/revolution4.jpg';
import revolution5 from './images/revolution5.jpg';
import running2 from './images/running2.jpg';
import running3 from './images/running3.jpg';
import running4 from './images/running4.jpg';
import running6 from './images/running6.jpg';
import adidas2 from './images/adidas2.jpg';
import adidas1 from './images/adidas1.jpg';
import HeaderIMG6 from "./images/HeaderIMG6.jpg";
import HeaderIMG4 from "./images/HeaderIMG4.jpg";
import HeaderIMG5 from "./images/HeaderIMG5.jpg";
import HeaderIMG7 from "./images/HeaderIMG7.jpg";
import './product.css';
import { CartContext } from './totalPrice';
import TotalPrice from './totalPrice';

function Socks() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: running
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: revolution
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: revolution2
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: revolution3
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1199.99,
      image: revolution4
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: revolution5
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: adidas2
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1399.99,
      image: adidas1
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 750.99,
      image: running2
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 849.99,
      image: running4
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1499.99,
      image: running6
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: running3
    },
  ];

  return (
    <div className="container">
      <div className='row no-gutters'>
          {productData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card>
                  <Card.Img className='product-image' variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: R{product.price ? product.price.toFixed(2) : ''}</Card.Text>
                    <Button className='btn-custom' onClick={() => addToCart(product)}>Buy</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
      
    </div>
  );
}

export default Socks;