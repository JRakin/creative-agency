import React from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const handleOrder = (id) => {
    fetch('https://aqueous-reef-82491.herokuapp.com/getService/' + id)
      .then((res) => res.json())
      .then((data) => {
        history.push({
          pathname: '/dashboard',
          state: { service: data },
        });
      });
    // history.push('/dashboard/' + id);
  };

  return (
    <div className="col-md-4 p-3 text-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div
          onClick={() => handleOrder(service._id)}
          className="service-card py-4 px-4"
        >
          <img
            className="w-25"
            src={`data:image/jpeg;base64,${service.image.img}`}
            alt=""
          />
          <h6 className="my-3" style={{ fontWeight: '800' }}>
            {service.name}
          </h6>
          <p style={{ fontSize: '14px' }}>{service.description}</p>
        </div>
      </animated.div>
    </div>
  );
};

export default ServiceCard;
