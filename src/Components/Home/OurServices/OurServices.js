import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:4000/getAllServices')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setServices(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

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
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
