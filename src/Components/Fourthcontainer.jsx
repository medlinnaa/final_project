import React from 'react'
import '../assets/CSS/Fourthcard.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from "../assets/Images/firstcard.png"
import second from "../assets/Images/secondcard.png"
import third from "../assets/Images/thirdcard.png"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "gray"}}
      onClick={onClick}
    />
  );
}

const Fourthcontainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          margin:"-1rem 0rem",
          borderRadius: "10px",
          padding: "0px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "14px",
          height: "15px",
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='fourcards-container'>
        <h3>НОВИНКИ</h3>
        {/* <div className="cards"> */}
      <Slider {...settings}>
      <div className='card'>
    <div className="img-part">
     <img src={first} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
     <div className="sale-part">
        <button>Sale</button>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
     <div className="small-text">
     <del>1 953 грн</del>
     <h5>1 953 грн</h5>
     </div>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={second} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={third} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={first} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
     <div className="sale-part">
        <button>Sale</button>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
     <div className="small-text">
     <del>1 953 грн</del>
     <h5>1 953 грн</h5>
     </div>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={second} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={third} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={first} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
     <div className="sale-part">
        <button>Sale</button>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
     <div className="small-text">
     <del>1 953 грн</del>
     <h5>1 953 грн</h5>
     </div>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={second} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
  <div className='card'>
    <div className="img-part">
     <img src={third} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>Медный чайник c фарфоровой ручкой</p>
      <h5>1 953 грн</h5>
    </div>
  </div>
      </Slider>
      {/* </div>  */}
      <div className='btn'>
        <button>
          <a href='#'>Перейти в каталог</a>
        </button>
      </div>
        </div>
  )
}

export default Fourthcontainer