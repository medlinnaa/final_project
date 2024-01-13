import React from 'react'
import third from '../thirdcont.json'
import ThirdCard from './ThirdCard';
import '../assets/CSS/Thirdcard.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const Thirdcontainer = () => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='cards-container'>
        <h3>ЛУЧШИЕ ПРОДАЖИ</h3>
        {/* <div className="cards"> */}
      <Slider {...settings}>
        {third.map((m) => (
          <div key={m.id}>
            {/* Render the card content inside the slider item */}
            <ThirdCard image={m.src} audience={m.audience} about={m.about} />
          </div>
        ))}
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

export default Thirdcontainer