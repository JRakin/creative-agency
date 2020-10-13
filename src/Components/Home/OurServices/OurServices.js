import React from 'react';
import serviceImg from '../../../images/icons/service1.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurServices = () => {
  const serviceData = [
    {
      title: 'Web & Mobile Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa enim mollitia nam tempore amet.',
      id: '1',
      image: serviceImg,
    },
    {
      title: 'Web & Mobile Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa enim mollitia nam tempore amet.',
      id: '2',
      image: serviceImg,
    },
    {
      title: 'Web & Mobile Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa enim mollitia nam tempore amet.',
      id: '3',
      image: serviceImg,
    },
  ];

  return (
    <div className="container">
      <div className="py-5 my-5">
        <h2
          className="text-center my-5 pb-5"
          style={{ color: '#111430', fontWeight: '700' }}
        >
          Provide Awesome <span style={{ color: '#9DC685' }}>Services</span>
        </h2>
        <div className="row my-5">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
