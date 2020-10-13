import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar py-4 navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img className="w-25" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-3" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3" to="/portfolio">
                Our Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3" to="/team">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn btn-brand">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
