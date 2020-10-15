import React, { useContext, useEffect, useState } from 'react';
import './OrderForm.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const OrderForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [service, setService] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setService(location.state.service);
    }
  }, [location]);

  const onSubmit = (data, e) => {
    const newData = { ...data, status: 'pending', image: service.image };

    fetch('http://localhost:4000/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    }).then((result) => {
      e.target.reset();
      Swal.fire('Congrats', 'Your order submitted successfully', 'success');
    });
    console.log(data);
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="order-form p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            type="text"
            defaultValue={loggedInUser.name}
            placeholder="Your name/Company name"
            ref={register({ required: true })}
          />
          {errors.name && <span className="warning">Name is Required</span>}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            type="email"
            defaultValue={loggedInUser.email}
            placeholder="Your Email"
            ref={register({ required: true })}
          />
          {errors.email && <span className="warning">Email is Required</span>}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="service"
            type="text"
            defaultValue={service.name}
            placeholder="Service name"
            ref={register({ required: true })}
          />
          {errors.service && (
            <span className="warning">Service name is Required</span>
          )}
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="description"
            rows="5"
            cols="30"
            placeholder="Project Details"
            ref={register({ required: true })}
          />
          {errors.description && (
            <span className="warning">Description is Required</span>
          )}
        </div>

        <div className="form-group">
          <input
            className="form-control"
            name="price"
            type="number"
            placeholder="Price"
            ref={register({ required: true })}
          />{' '}
          <br />
          {errors.price && <span className="warning">Price is Required</span>}
        </div>
        {/* <div className="form-group">
            <input
              name="file"
              id="file"
              type="file"
              className="ml-3"
              ref={register}
            />
            <label htmlFor="file">Choose file</label>
          </div> */}
        <input className="btn-send" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default OrderForm;
