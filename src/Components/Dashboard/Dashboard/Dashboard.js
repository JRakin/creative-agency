import React, { useState } from 'react';
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

const Dashboard = () => {
  const [selectActive, setSelectActive] = useState('Order');

  const handleOrder = () => {
    setSelectActive('Order');
  };

  const handleLoadList = () => {
    setSelectActive('List');
  };

  const handleReview = () => {
    setSelectActive('Review');
  };

  const showAllList = () => {
    setSelectActive('AllList');
  };

  const handleAddService = () => {
    setSelectActive('AddService');
  };

  const handleMakeAdmin = () => {
    setSelectActive('MakeAdmin');
  };

  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <Link className="py-4" to="/">
              <img className="w-50" src={Logo} alt="" />
            </Link>
            <div className="py-5">
              <p className="mb-0">
                <button
                  onClick={handleOrder}
                  className={
                    selectActive === 'Order'
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
                    selectActive === 'List'
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
                    selectActive === 'Review'
                      ? 'btn btn-option active-btn'
                      : 'btn btn-option'
                  }
                >
                  <FontAwesomeIcon className="mr-2" icon={faCommentAlt} />
                  Review
                </button>
              </p>
            </div>
            <div className="py-5">
              <p className="mb-0">
                <button
                  onClick={showAllList}
                  className={
                    selectActive === 'AllList'
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
                    selectActive === 'AddService'
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
                    selectActive === 'MakeAdmin'
                      ? 'btn btn-option active-btn'
                      : 'btn btn-option'
                  }
                >
                  <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                  Make An Admin
                </button>
              </p>
            </div>
          </div>
          <div className="col-md-9 mt-5 show-activities">
            {showActive(selectActive)}
          </div>
        </div>
      </div>
    </div>
  );
};

function showActive(active) {
  if (active === 'Order') {
    return <OrderForm></OrderForm>;
  } else if (active === 'List') {
    return <UserServiceList></UserServiceList>;
  } else if (active === 'Review') {
    return <ReviewForm></ReviewForm>;
  } else if (active === 'AddService') {
    return <AddService></AddService>;
  } else if (active === 'MakeAdmin') {
    return <MakeAdmin></MakeAdmin>;
  }
}

export default Dashboard;
