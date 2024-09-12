import React, { useContext, useState} from 'react';
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import men from './images/ce95c48727700e1092af6658889b1f49_1600x.webp'; 
import men2 from './images/amm09934_black_xl_3.webp';
import men3 from './images/bmm79745_white_xl.webp';
import men4 from './images/bmm34748_ecru_xl.webp';
import HeaderIMG1 from "./images/Untitled Design(33).png";
import './product.css';
import { CartContext } from './totalPrice';


function Mens() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [selectedColors, setSelectedColors] = useState({});

  // Array of product objects
  const productData = [
    {
      name: 'Black Jumper',
      description: 'High-quality Mens jumper',
      price: 650.99,
      image: men
    },
    {
      name: 'Black Jumper',
      description: 'High-quality Mens jumper',
      price: 999.99,
      image: men2
    },
    {
      name: 'Black Jumper',
      description: 'High-quality Mens jumper',
      price: 1299.99,
      image: men3
    },
    {
      name: 'Black Jumper',
      description: 'High-quality Mens jumper',
      price: 1350.99,
      image: men4
    },
  ];

  return (
    <div className="container">
      <img className='header-image' src={HeaderIMG1} alt='header'/>
      <span className='products-header-text'>Men</span>
      <hr></hr>
      <div className='row g-6'>
        <h2 className='section-header'>Jumper's</h2>
        <div className='row no-gutters'>
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
      </div>
      <hr></hr>
    </div>
  );
}

export default Mens;
