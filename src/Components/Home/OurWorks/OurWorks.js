import React from 'react';
import Slider from 'react-slick';
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work4 from '../../../images/carousel-4.png';
import work5 from '../../../images/carousel-5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurWorks.css';

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    arrows: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container-slide my-5">
      <h2 className="text-center mb-5 text-white">
        Here are some of <span style={{ color: '#9DC685' }}>our works</span>
      </h2>
      <div className="container">
        <Slider {...settings}>
          <div className="p-4">
            <img className="w-100" src={work1} alt="" />
          </div>
          <div className="p-4">
            <img className="w-100" src={work2} alt="" />
          </div>
          <div className="p-4">
            <img className="w-100" src={work5} alt="" />
          </div>
          <div className="p-4">
            <img className="w-100" src={work4} alt="" />
          </div>
          <div className="p-4">
            <img className="w-100" src={work5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurWorks;
