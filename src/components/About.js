import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Figure } from 'react-bootstrap';
import Logo from './images/Logo.png'; 
import storeImage from './images/store2.jpg'; 
import TotalPrice from './totalPrice';
import storeImage3 from './images/store3.jpg';

function About() {
  return (
    <div className="container mt-5">
      <div className='total-price'>
      <TotalPrice/>
      </div>
      <h1>About TripleM Sports</h1>
        <p>
          Welcome to TripleM Sports, where our passion for sports meets our commitment to excellence. Our story began in 2010 with a small, single-storefront in a bustling city. Driven by a deep love for sports and a vision to provide the best gear to athletes, our founder, Mark Thompson, set out to create a store that offered both quality products and exceptional customer service.
        </p>

      <Figure className="col-14 md-3">
        <Figure.Image
          width={400}
          height={300}
          alt="Our Store"
          src={storeImage}
          className="mb-4" 
        />
        <Figure.Caption>

        <div className='left__text'>
        <h2>Our Beginnings</h2>
        <p>
          In the early days, TripleM Sports was a humble shop known for its personalized service and expert advice. Mark's dedication to understanding the needs of each customer quickly gained a loyal following among local athletes and fitness enthusiasts. The small shop became a hub for the community, a place where people could find not only great products but also support and encouragement in their fitness journeys.
        </p>

        <h2>Our Growth</h2>
        <p>
          As word of our quality products and outstanding service spread, TripleM Sports began to grow. We expanded our product range, partnered with more renowned brands, and even started hosting local sports events and workshops. This growth was fueled by our unwavering commitment to our core values: quality, customer focus, integrity, and community.
        By 2015, we had opened several new locations and launched our online store, making it easier for customers to access our products from anywhere. The transition to online retail brought new challenges, but our dedication to customer satisfaction remained unchanged. We invested in a user-friendly website, prompt delivery services, and a responsive customer support team to ensure a seamless shopping experience.
        </p>

        <h2>Our Mission</h2>
        <p>
          At TripleM Sports, our mission is to empower individuals to achieve their fitness goals by offering top-notch products that enhance performance, comfort, and style. We believe that everyone deserves access to the best sports equipment and apparel, regardless of their skill level or budget.
        </p>

        <Figure.Image className="col-14 md-3"
          width={400}
          height={300}
          alt="Logo"
          src={storeImage3}
        />

        <h2>Our Values</h2>
        <p><strong> Quality:</strong> We are dedicated to offering only the highest quality products from trusted brands. Each item in our store is carefully selected to ensure it meets our stringent standards for durability, performance, and design. 
         <strong> Customer Focus:</strong> Your satisfaction is our top priority. We strive to provide a seamless shopping experience, from easy navigation on our website to prompt and reliable customer support. 
         <strong> Integrity:</strong> We operate with honesty and transparency in all our dealings. Our goal is to build lasting relationships with our customers based on trust and mutual respect. 
         <strong> Community:</strong> We believe in the power of community and are committed to supporting local sports teams, events, and fitness initiatives. We are proud to be a part of the vibrant sports community and to contribute to its growth and success.
        Today, TripleM Sports continues to thrive, with a strong online presence and a growing community of loyal customers. We are constantly exploring new ways to innovate and improve, from expanding our product offerings to enhancing our online shopping experience. Our journey is far from over, and we remain as passionate as ever about helping our customers achieve their fitness goals.
        </p>

        <h2>Join the TripleM Sports Community</h2>
        <p>
          We invite you to join our growing community of sports enthusiasts. Follow us on social media for the latest updates, exclusive offers, and fitness tips. Connect with us on Instagram, Facebook, and Twitter to stay informed and engaged.
        </p>

        <h2>Contact Us</h2>
        <p>
          We value your feedback and are always here to help. If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us. You can contact us via email at <a href="mailto:support@triplesports.com">support@triplesports.com</a> or call us at 1-800-555-SPORT.
          Thank you for choosing TripleM Sports. We look forward to being a part of your fitness journey and helping you achieve your goals.
        </p>
     
        

        <h2>Contact Details</h2>
        <ul className='no__bullets'>
          <li>Email: <a href="mailto:support@triplesports.com">support@triplesports.com</a></li>
          <li>Telephone: 012 345 6789</li>
          <li>Twitter: @TrxpleM</li>
          <li>LinkedIn: Marcus Mdlalo</li>
        </ul>
        <Figure className="text-center">
        <Figure.Image
          width={171}
          height={180}
          alt="Logo"
          src={Logo}
          className="mb-4"
        />
      </Figure>
        </div>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default About;




