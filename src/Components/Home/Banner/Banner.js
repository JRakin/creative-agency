import React from 'react';
import BannerImg from '../../../images/logos/Frame.png';

const Banner = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{ paddingTop: '50px', paddingBottom: '100px' }}
      >
        <div className="col-md-6">
          <h1 style={{ color: '#111430', fontWeight: '900', fontSize: '50px' }}>
            Let's Grow Your <br /> Brand To The <br /> Next Level
          </h1>
          <p
            className="my-4 text-justify"
            style={{ color: '#111430', fontSize: '18px' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            necessitatibus veritatis est iusto ab minus, cum natus architecto
            harum dolores!
          </p>
          <button className="btn btn-brand">Hire Us</button>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
