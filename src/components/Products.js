import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nike from './images/Nike1.webp'; 
import nike2 from './images/Nike2.webp';
import nike3 from './images/Nike3.jpg';
import nike4 from './images/Nike4.webp';
import whiteT from './images/WhiteT.jpeg';
import whiteT2 from './images/WhiteT2.webp';
import whiteT3 from './images/WhiteT3.webp';
import whiteT4 from './images/bmm79745_white_xl.webp';
import nudeT from './images/NudeT.webp';
import nudeT2 from './images/NudeT2.jpg';
import nudeT3 from './images/NudeT4.webp';
import nudeT4 from './images/NudeT5.webp';
import HeaderIMG1 from "./images/Untitled Design(27).png";
import './product.css';
import { CartContext } from './totalPrice';

function Products() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  // Array of product objects
  const productData = [
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: nike
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: nike2
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: nike3
    },
    {
      name: 'Running Shoes',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: nike4
    },
  ];

  const whiteTData = [
    {
      name: 'White T',
      description: 'High quality plain white T',
      price: 399,
      image: whiteT,
    },
    {
      name: 'White T',
      description: 'High quality plain white T',
      price: 499,
      image: whiteT2,
    },
    {
      name: 'White T',
      description: 'High quality plain white T',
      price: 599,
      image: whiteT3,
    },
    {
      name: 'White T',
      description: 'High quality plain white T',
      price: 499,
      image: whiteT4,
    },
  ]

  const nudeTData = [
    {
      name: 'Nude T',
      description: 'High quality plain white T',
      price: 399,
      image: nudeT,
    },
    {
      name: 'Brown T',
      description: 'High quality plain white T',
      price: 499,
      image: nudeT2,
    },
    {
      name: 'Nude T',
      description: 'High quality plain white T',
      price: 599,
      image: nudeT3,
    },
    {
      name: 'Off-white T',
      description: 'High quality plain white T',
      price: 499,
      image: nudeT4,
    },
  ]

  return (
    <div className="container">
      <img className='header-image' src={HeaderIMG1} alt='header'/>
      <span className='products-header-text'>Featured</span>
      <hr></hr>
      <div className='row no-gutters'>
        <h2 className='section-header'>Women's Training Tops</h2>
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
      <div className='row no-gutters'>
        <h2 className='section-header'>Men's T's</h2>
          {whiteTData.map((product, index) => (
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
      <div className='row no-gutters'>
        <h2 className='section-header'>Women's T's</h2>
          {nudeTData.map((product, index) => (
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

export default Products;





