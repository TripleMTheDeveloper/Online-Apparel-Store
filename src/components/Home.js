import './Home.css';
import HeaderIMG13 from './images/TRAININGOVERSIZEDT-SHIRTBlackB1A7M-BBBB8842_3840x.webp';
import HeaderIMG10 from './images/HeaderIMG10.jpg';
import HeaderIMG16 from './images/WomensAutumn_revisededit_-final12.jpg';
import HomeIMG2 from './images/HomeIMG2.jpg';

function Home() {


  return (
    <div className='container'>
      <div className='image-box'>
        <img className='img-1' src={HeaderIMG10} alt="My image description" />
        <img className='img-2' src={HeaderIMG13} alt="My image description" />
        <img className='img-3' src={HeaderIMG16} alt="My image description" />
        <img className='img-4' src={HomeIMG2} alt="My image description" />
      </div>
    </div>
  );
}

export default Home;


