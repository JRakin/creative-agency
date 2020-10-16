import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import './Dashboard.css';
import {
  faShoppingCart,
  faListAlt,
  faCommentAlt,
  faPlus,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderForm from '../OrderForm/OrderForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import UserServiceList from '../UserServiceList/UserServiceList';
import jwt_decode from 'jwt-decode';
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const Dashboard = () => {
  const user = jwt_decode(sessionStorage.getItem('token'));

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const data = { email: user.email };
    fetch('https://aqueous-reef-82491.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user.email]);

  const [selectActiveUser, setSelectActiveUser] = useState('Order');
  const [selectActiveAdmin, setSelectActiveAdmin] = useState('AllList');

  const handleOrder = () => {
    setSelectActiveUser('Order');
  };

  const handleLoadList = () => {
    setSelectActiveUser('List');
  };

  const handleReview = () => {
    setSelectActiveUser('Review');
  };

  const showAllList = () => {
    setSelectActiveAdmin('AllList');
  };

  const handleAddService = () => {
    setSelectActiveAdmin('AddService');
  };

  const handleMakeAdmin = () => {
    setSelectActiveAdmin('MakeAdmin');
  };

  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-2">
            <Link className="py-4" to="/">
              <img className="w-75" src={Logo} alt="" />
            </Link>
            {!isAdmin ? (
              <div className="py-5">
                <p className="mb-0">
                  <button
                    onClick={handleOrder}
                    className={
                      selectActiveUser === 'Order'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    {' '}
                    <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                    Order
                  </button>
                </p>
                <p className="mb-0">
                  <button
                    onClick={handleLoadList}
                    className={
                      selectActiveUser === 'List'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    <FontAwesomeIcon className="mr-2" icon={faListAlt} />
                    Service List
                  </button>
                </p>
                <p className="mb-0">
                  <button
                    onClick={handleReview}
                    className={
                      selectActiveUser === 'Review'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    <FontAwesomeIcon className="mr-2" icon={faCommentAlt} />
                    Review
                  </button>
                </p>
              </div>
            ) : (
              <div className="py-5">
                <p className="mb-0">
                  <button
                    onClick={showAllList}
                    className={
                      selectActiveAdmin === 'AllList'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    <FontAwesomeIcon className="mr-2" icon={faListAlt} />
                    Service List
                  </button>
                </p>
                <p className="mb-0">
                  <button
                    onClick={handleAddService}
                    className={
                      selectActiveAdmin === 'AddService'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    {' '}
                    <FontAwesomeIcon className="mr-2" icon={faPlus} />
                    Add Service
                  </button>
                </p>
                <p className="mb-0">
                  <button
                    onClick={handleMakeAdmin}
                    className={
                      selectActiveAdmin === 'MakeAdmin'
                        ? 'btn btn-option active-btn'
                        : 'btn btn-option'
                    }
                  >
                    <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                    Make Admin
                  </button>
                </p>
              </div>
            )}
          </div>
          <div className="col-md-10 mt-5 show-activities">
            <div>
              {!isAdmin
                ? showActiveUser(selectActiveUser)
                : showActiveAdmin(selectActiveAdmin)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function showActiveUser(active) {
  if (active === 'Order') {
    return <OrderForm></OrderForm>;
  } else if (active === 'List') {
    return <UserServiceList></UserServiceList>;
  } else if (active === 'Review') {
    return <ReviewForm></ReviewForm>;
  }
}

function showActiveAdmin(active) {
  if (active === 'AllList') {
    return <AdminServiceList></AdminServiceList>;
  } else if (active === 'AddService') {
    return <AddService></AddService>;
  } else if (active === 'MakeAdmin') {
    return <MakeAdmin></MakeAdmin>;
  }
}

export default Dashboard;
