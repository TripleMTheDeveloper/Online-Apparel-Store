import './Home.css';
import HeaderIMG13 from './images/TRAININGOVERSIZEDT-SHIRTBlackB1A7M-BBBB8842_3840x.webp';
import HeaderIMG10 from './images/HeaderIMG10.jpg';
import HeaderIMG16 from './images/amm09934_black_xl_3.webp';
import HomeIMG2 from './images/HomeIMG2.jpg';
import NewItem from './images/media.boohoo.webp';
import NewItem2 from './images/media.boohoo2.webp';
import NewItem3 from './images/TRAININGOVERSIZEDT-SHIRTBlackB1A7M-BBBB8842_3840x.webp';
import NewItem4 from './images/IronworksOversizedT-ShirtGSBlackB8A1P-BB2J-0235_b6be8b68-92b0-4fd4-b2d5-0039313d9fb1_3840x.webp';
import Shoes from './images/revolution.png';
import Shoes2 from './images/revolution2.jpg';
import Shoes3 from './images/revolution3.jpg';
import Shoes4 from './images/revolution4.jpg';
import Socks from './images/WhtBlkSockShopify2.webp';
import Socks2 from './images/CT_LogoSocks_white_2048x2048.webp';
import Socks3 from './images/e6fc50c_large.jpg';
import Socks4 from './images/WhiteSocks.webp';

function Home() {


  return (
    <div className='container'>
      <div className='section1'>
        <div className='image-box'>
          <img className='img-1' src={HeaderIMG10} alt="alt" />
          <span className='image-text1'>Featured</span>
          <img className='img-2' src={HeaderIMG13} alt="alt" />
          <span className='image-text2'>Women</span>
        </div>
        <div className='image-box2'>
          <img className='img-3' src={HeaderIMG16} alt="alt" />
          <span className='image-text3'>Mens</span>
          <img className='img-4' src={HomeIMG2} alt="alt" />
          <span className='image-text4'>Gym Equipment</span>
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
        <h1 className='section-3-header'>Shop Now</h1>
        <button className='shop-now-button'>Shop Now</button>
      </div>
      <hr className='custom-line'></hr>
      <h1 className='section-header'>Running Shoes</h1>
      <div className='new-shoes-box'>
        <img className='shoes' src={Shoes} alt="alt" />
        <img className='shoes2' src={Shoes2} alt="alt" />
        <img className='shoes3' src={Shoes3} alt="alt" />
        <img className='shoes4' src={Shoes4} alt="alt" />
      </div>
      <hr className='custom-line'></hr>
      <h1 className='section-header'>Socks</h1>
      <div className='new-socks-box'>
        <img className='socks' src={Socks} alt="alt" />
        <img className='socks2' src={Socks2} alt="alt" />
        <img className='socks3' src={Socks3} alt="alt" />
        <img className='socks4' src={Socks4} alt="alt" />
      </div>
      <hr className='custom-line'></hr>
    </div>
  );
}

export default Home;


