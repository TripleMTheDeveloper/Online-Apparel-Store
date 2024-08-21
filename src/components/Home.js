import {useState} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from 'react-bootstrap';
import Logo from './images/Logo.png';
import profile from './images/profile.jpg';
import TotalPrice from './totalPrice';
import HeaderIMG12 from './images/HeaderIMG12.jpg';
import HeaderIMG13 from './images/HeaderIMG13.jpeg';
import HeaderIMG15 from './images/HeaderIMG15.jpeg';
import HeaderIMG16 from './images/HeaderIMG16.jpg';
import HomeIMG1 from './images/HomeIMG1.jpg';
import HomeIMG2 from './images/HomeIMG2.jpg';


function Home() {
  const [isSettingCredentials, setIsSettingCredentials] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSetCredentials = (event) => { //function to handle the account creation
    event.preventDefault();
    setUsername(inputUsername);
    setPassword(inputPassword);
    setIsSettingCredentials(false);
  };

  const handleLogin = (event) => { // Function to handle log in phase
    event.preventDefault();
    if (username === inputUsername && password === inputPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => { //Funciton to handle log out
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setInputUsername('');
    setInputPassword('');
    setIsSettingCredentials(true);
  };

  return (
    <div className='container'>
      <div className='total-price'>
        <TotalPrice />
      </div>
      <div className="row no-gutters">
        <h2>Home</h2>
        <div className="col-7 col-md-3">
          <Figure className="figure-no-border">
            <Figure.Image
              src={HeaderIMG12}
              alt="Image 3"
              className="img-custom img1"
            />
          </Figure>
        </div>
        <div className="col-6 col-md-3">
          <Figure className="figure-no-border">
            <Figure.Image
              src={HeaderIMG13}
              alt="Image 4"
              className="img-custom img2"
            />
          </Figure>
        </div>
        <div className="col-6 col-md-3">
          <Figure className="figure-no-border">
            <Figure.Image
              src={HeaderIMG15}
              alt="Image 4"
              className="img-custom img3"
            />
          </Figure>
        </div>
        <div className="col-6 col-md-3">
          <Figure className="figure-no-border">
            <Figure.Image
              src={HeaderIMG16}
              alt="Image 4"
              className="img-custom img3"
            />
          </Figure>
        </div>
      </div>
      <div>
      <Figure className="col-2 md-2">
        <Figure.Image
          width={90}
          height={95}
          alt="profile"
          src={profile}
          className="mb-4"
        />
      </Figure>
        {isAuthenticated ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : isSettingCredentials ? (
          <form onSubmit={handleSetCredentials} className='password__input'>
            <div>
              <input
                type="text"
                placeholder='Username'
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder='Password'
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>
            <button className='login__button' type="submit">Create Account</button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className='password__input'>
            <div>
              <input
                type="text"
                placeholder='Username'
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder='Password'
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>
            <button className='login__button' type="submit">Login</button>
          </form>
        )}
      </div>
      <div>
      <Figure className="text-center">
        <Figure.Image
          width={114}
          height={108}
          alt="Logo"
          src={Logo}
          className="mb-4"
        />
      </Figure>
      <h1>Welcome to our official online store!</h1>
      <p>
        At TripleM Sports, we are passionate about providing high-quality sports gear and apparel for athletes of all levels. Whether you're a professional runner, a weekend warrior, or just starting your fitness journey, we have the right equipment and clothing to help you achieve your goals.
      </p>

      <Figure className="figure-no-border">
            <Figure.Image
              src={HomeIMG2}
              alt="HomeIMG"
              className="mb-4"
            />
          </Figure>

      <h2>Why Shop with Us?</h2>
      <ul className='no__bullets'>
        <li><strong>Quality Products:</strong> We offer a wide range of products from top brands to ensure you get the best in performance and durability.</li>
        <li><strong>Competitive Prices:</strong> Our prices are highly competitive, and we frequently offer discounts and promotions to give you the best value for your money.</li>
        <li><strong>Customer Satisfaction:</strong> Your satisfaction is our priority. We provide excellent customer service to make your shopping experience as smooth as possible.</li>
        <li><strong>Wide Selection:</strong> From running shoes and apparel to fitness accessories and sports equipment, we have everything you need to excel in your sport.</li>
        <li><strong>Easy Shopping Experience:</strong> Our user-friendly website makes it easy to browse and find what you're looking for. Plus, our secure checkout process ensures your personal information is protected.</li>
      </ul>

      <Figure className="figure-no-border">
            <Figure.Image
              src={HomeIMG1}
              alt="HomeIMG2"
              className="mb-4"
            />
          </Figure>

      <h2>Featured Products</h2>
      <ul className='no__bullets'>
        <li><strong>Running Shoes:</strong> Discover our collection of high-quality running shoes designed to provide comfort, support, and performance for every type of runner.</li>
        <li><strong>Fitness Apparel:</strong> Explore our range of fitness clothing, including tops, bottoms, and outerwear, crafted from breathable and moisture-wicking fabrics.</li>
        <li><strong>Sports Equipment:</strong> Find the right gear for your sport, from soccer balls and basketballs to yoga mats and resistance bands.</li>
        <li><strong>Accessories:</strong> Complete your workout with our selection of accessories, including water bottles, fitness trackers, and gym bags.</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>
        Have questions or need assistance? Our customer service team is here to help. Contact us via email at <a href="mailto:support@triplesports.com">support@triplesports.com</a> or call us at 1-800-555-SPORT.
        Thank you for choosing TripleM Sports. We look forward to supporting you on your fitness journey!
      </p>
      </div>
      
    </div>
  );
}

export default Home;
