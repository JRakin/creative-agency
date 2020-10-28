import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Swal from 'sweetalert2';
import { UserContext } from '../../../App';
import jwt_decode from 'jwt-decode';

const Navbar = () => {
  const [activeUser, setActiveUser] = useState({});

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    if (sessionStorage.length) {
      const user = jwt_decode(sessionStorage.getItem('token'));
      setActiveUser(user);
    }
  }, []);

  const handleSignOut = () => {
    // console.log('hit');
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser({});
        setActiveUser({});
        sessionStorage.removeItem('token');
      })
      .catch((err) => {
        Swal.fire('Ops!', 'Something went wrong', 'warning');
      });
  };

  return (
    <div className="container">
      <nav className="navbar py-4 navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={Logo} alt="" />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-3" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3" to="/dashboard">
                Dashboard
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
              {!activeUser.email && !activeUser.user_id ? (
                <Link to="/login">
                  <button className="btn btn-brand">Login</button>
                </Link>
              ) : (
                <button onClick={handleSignOut} className="btn btn-brand">
                  Sign out
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
