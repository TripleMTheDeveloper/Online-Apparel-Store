import './Home.css';
import {Link} from 'react-router-dom';
import HeaderIMG13 from './images/WomensAutumn_revisededit_-final12.jpg';
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
    <div>
      <div className='container'>
        <div className='section1'>
          <div className='image-box'>
            <img className='img-1' src={HeaderIMG10} alt="alt" />
            <Link to="/Products"><span className='image-text1'>Featured</span></Link>
            <img className='img-2' src={HeaderIMG13} alt="alt" />
            <Link to="/Womens"><span className='image-text2'>Women</span></Link>
          </div>
          <div className='image-box2'>
            <img className='img-3' src={HeaderIMG16} alt="alt" />
            <Link to="/Mens"><span className='image-text3'>Mens</span></Link>
            <img className='img-4' src={HomeIMG2} alt="alt" />
            <Link to="/Gym"><span className='image-text4'>Equipment</span></Link>
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
        <hr className='custom-line'></hr>
      </div>
      <div className='contact-box'>
        <h2>ABOUT US</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
           software like Aldus PageMaker including versions of Lorem Ipsum.</p>

           <p>It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
            text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
    </div>
    

    
  );
}

export default Home;


