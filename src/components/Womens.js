import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import women from './images/fzz39895_black_xl.jpg'; 
import ladyLeather from './images/LadyLeather.jpg';
import ladyLeather2 from './images/LadyLeather2.webp';
import ladyLeather3 from './images/LadyLeather3.webp';
import ladyLeather4 from './images/LadyLeather4.webp';
import ladyJacket from './images/LadyJacket.jpg';
import ladyJacket2 from './images/LadyJacket2.jpg';
import ladyJacket3 from './images/LadyJacket3.webp';
import ladyJacket4 from './images/LadyJacket4.jpg';
import womensJeans from './images/womensJeans.webp';
import womensJeans2 from './images/womensJeans3.webp';
import womensJeans3 from './images/womensJeans3.webp';
import womensJeans4 from './images/womensJeans4.webp';
import HeaderIMG1 from "./images/Untitled Design(32).png";
import './product.css';
import { CartContext } from './totalPrice';

function Womens() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Black T',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: women
    },
    {
      name: 'Black T',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: women
    },
    {
      name: 'Black T',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: women
    },
    {
      name: 'Black T',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: women
    },
  ];

  const jacketData = [
    {
      name: 'Leather Jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: ladyLeather
    },
    {
      name: 'Leather Jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: ladyLeather2
    },
    {
      name: 'Leather Jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 1299.99,
      image: ladyLeather3
    },
    {
      name: 'Leather Jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: ladyLeather4
    },
  ];

  const winterData = [
    {
      name: 'Winter jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: ladyJacket
    },
    {
      name: 'Winter jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: ladyJacket2,
    },
    {
      name: 'Winter jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: ladyJacket3,
    },
    {
      name: 'Winter jacket',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: ladyJacket4
    },
  ];

  const pantsData = [
    {
      name: 'Jeans',
      description: 'High-quality running shoes for all types of runners.',
      price: 650.99,
      image: womensJeans
    },
    {
      name: 'Jeans',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: womensJeans2,
    },
    {
      name: 'Jeans',
      description: 'High-quality running shoes for all types of runners.',
      price: 999.99,
      image: womensJeans3,
    },
    {
      name: 'Jeans',
      description: 'High-quality running shoes for all types of runners.',
      price: 1350.99,
      image: womensJeans4
    },
  ];

  return (
    <div className="container">
      <img className='header-image' src={HeaderIMG1} alt='header'/>
      <span className='products-header-text'>Women</span>
      <hr></hr>
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
      <hr></hr>
      <div className='row no-gutters'>
        <h2 className='section-header'>Women's Jackets</h2>
          {winterData.map((product, index) => (
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
      <div className='row no-gutters'>
        <h2 className='section-header'>Women's T's</h2>
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
      <div className='row no-gutters'>
        <h2 className='section-header'>Women's Pants</h2>
          {pantsData.map((product, index) => (
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