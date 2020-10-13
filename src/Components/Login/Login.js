import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logos/logo.png';

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center m-5">
          <Link className="text-center" to="/">
            <img className="w-50" src={Logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
