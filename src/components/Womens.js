import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import women from './images/fzz39895_black_xl.jpg'; 
import HeaderIMG1 from "./images/Untitled Design(32).png";
import './product.css';
import { CartContext } from './totalPrice';

function Womens() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1199.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1399.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 750.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 849.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1499.99,
      image: women
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: women
    },
  ];

  // Array of color options
  const colorOptions = ['Black', 'Blue', 'Green', 'Red', 'White'];

  const handleColorSelect = (index, color) => {
    setSelectedColors(prevColors => ({
      ...prevColors,
      [index]: color
    }));
  };

  return (
    <div className="container">
      <img className='header-image' src={HeaderIMG1} alt='header'/>
      <span className='products-header-text'>Women</span>
      <div className='row no-gutters'>
          {productData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card>
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

export default Womens;