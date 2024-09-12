import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderIMG from './images/Untitled Design(37).png';
import gym from './images/Gym1.avif'; 
import gym2 from './images/Gym2.webp'; 
import gym3 from './images/Gym3.jpg'; 
import gym4 from './images/Gym4.webp'; 
import gym5 from './images/Gym5.jpg'; 
import gym6 from './images/Gym6.webp'; 
import gym7 from './images/Gym7.jpg'; 
import gym8 from './images/Gym8.webp'; 
import './product.css';
import { CartContext } from './totalPrice';

function Gym() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Pull up bar',
      description: 'Calisthenics pull up bar',
      price: 650.99,
      image: gym
    },
    {
      name: 'Pull up bar',
      description: 'Calisthenics pull up bar',
      price: 650.99,
      image: gym2
    },
    {
      name: 'Pull up bar',
      description: 'Calisthenics pull up bar',
      price: 650.99,
      image: gym3
    },
    {
      name: 'Pull up bar',
      description: 'Calisthenics pull up bar',
      price: 650.99,
      image: gym4
    },
  ];

  const dipbarData = [
    {
      name: 'Dip Bar',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: gym5
    },
    {
      name: 'Dip Bar',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: gym6
    },
    {
      name: 'Push up bars',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: gym7
    },
    {
      name: 'Push up bars',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: gym8
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
      <img className='header-image' src={HeaderIMG} alt='Header'/>
      <span className='products-header-text'>Equipment</span>
      <hr></hr>
      <div className='row g-6'>
        <h2 className='section-header'>Pull Up Bar's</h2>
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
      <hr></hr>
      <div className='row g-6'>
        <h2 className='section-header'>Dip Bar's</h2>
          {dipbarData.map((product, index) => (
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

export default Gym;
