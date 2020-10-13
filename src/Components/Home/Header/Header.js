import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
