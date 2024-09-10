import './Home.css';
import {Link} from 'react-router-dom';
import HeaderIMG13 from './images/TRAININGOVERSIZEDT-SHIRTBlackB1A7M-BBBB8842_3840x.webp';
import HeaderIMG10 from './images/HeaderIMG10.jpg';
import HeaderIMG16 from './images/amm09934_black_xl_3.webp';
import HomeIMG2 from './images/HomeIMG2.jpg';
import NewItem from './images/media.boohoo.webp';
import NewItem2 from './images/media.boohoo2.webp';
import NewItem3 from './images/TRAININGOVERSIZEDT-SHIRTBlackB1A7M-BBBB8842_3840x.webp';
import NewItem4 from './images/IronworksOversizedT-ShirtGSBlackB8A1P-BB2J-0235_b6be8b68-92b0-4fd4-b2d5-0039313d9fb1_3840x.webp';
import Item from './images/revolution.png';
import Item2 from './images/2710_grande.jpg';
import Item3 from './images/tpe-yoga-mat-fy1003.jpg';
import Item4 from './images/WhiteSocks.webp';

function Home() {


  return (
    <div className='container'>
      <div className='section1'>
        <div className='image-box'>
          <img className='img-1' src={HeaderIMG10} alt="alt" />
          <span className='image-text1'>Featured</span>
          <img className='img-2' src={HeaderIMG13} alt="alt" />
          <Link to="/Womens"><span className='image-text2'>Women</span></Link>
        </div>
        <div className='image-box2'>
          <img className='img-3' src={HeaderIMG16} alt="alt" />
          <Link to="/Mens"><span className='image-text3'>Mens</span></Link>
          <img className='img-4' src={HomeIMG2} alt="alt" />
          <Link to="/Gym"><span className='image-text4'>Gym Equipment</span></Link>
        </div>
      </div>
      <hr className='custom-line'></hr>
      <h1 className='section-header'>Latest Items</h1>
      <div className='new-items-box'>
        <img className='new-item' src={NewItem} alt="alt" />
        <img className='new-item2' src={NewItem2} alt="alt" />
        <img className='new-item3' src={NewItem3} alt="alt" />
        <img className='new-item4' src={NewItem4} alt="alt" />
      </div>
      <hr className='custom-line'></hr>
      <div className='section-3'>
        <Link to="/Products" ><button className='shop-now-button'>Shop Now</button></Link>
      </div>
      <hr className='custom-line'></hr>
      <h1 className='section-header'>Other Catagories</h1>
      <div className='items-box'>
        <img className='item' src={Item} alt="alt" />
        <Link to="/Shoes"><span className='item-image-text'>Shoes</span></Link>
        <img className='item2' src={Item2} alt="alt" />
        <Link to="/Accessories"><span className='item-image-text2'>Accessories</span></Link>
        <img className='item3' src={Item3} alt="alt" />
        <Link to="/Gym"><span className='item-image-text3'>Equipment</span></Link>
        <img className='item4' src={Item4} alt="alt" />
        <Link to="/Socks"><span className='item-image-text4'>Socks</span></Link>
      </div>
      <hr></hr>
      <div className='contact-box'>
        <h2>contact us</h2>
      </div>
    </div>
  );
}

export default Home;


