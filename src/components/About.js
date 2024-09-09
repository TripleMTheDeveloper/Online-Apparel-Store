import './About.css';
import React from 'react';
import Logo from './images/TripleMLogo.png'; 

function About() {
  return (
    <div>
      <img className='about-logo' src={Logo} alt="My image description" />
    </div>
  );
}

export default About;




