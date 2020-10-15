import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import UserServiceCard from '../UserServiceCard/UserServiceCard';

const UserServiceList = () => {
  const [services, setServices] = useState([]);

  const user = jwt_decode(sessionStorage.getItem('token'));
  const email = user.email;

  useEffect(() => {
    fetch('http://localhost:4000/getAllUserServices/' + email)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [email]);
  return (
    <div className="order-form row p-5">
      {services.map((service) => (
        <UserServiceCard key={service._id} service={service}></UserServiceCard>
      ))}
    </div>
  );
};

export default UserServiceList;
