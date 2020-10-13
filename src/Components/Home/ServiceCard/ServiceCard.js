import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ServiceCard.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleOrder = () => {
    console.log('hit');
  };

  return (
    <div className="col-md-4 text-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div onClick={handleOrder} className="service-card py-4 px-4">
          <img className="w-25" src={service.image} alt="" />
          <h6 className="my-3" style={{ fontWeight: '800' }}>
            {service.title}
          </h6>
          <p style={{ fontSize: '14px' }}>{service.description}</p>
        </div>
      </animated.div>
    </div>
  );
};

export default ServiceCard;
