import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

const ReviewForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const getPhoto = () => {
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    return decodedToken.picture;
  };

  const onSubmit = (data, e) => {
    const newData = {
      ...data,
      email: loggedInUser.email,
      photo: getPhoto(),
    };

    fetch('http://localhost:4000/addReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    }).then((result) => {
      e.target.reset();
      Swal.fire('Thanks', 'Your review posted successfully', 'success');
    });
  };
  return (
    <div className="order-form p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Your name"
            ref={register({ required: true })}
          />
          {errors.name && <span className="warning">Name is Required</span>}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="designation"
            type="text"
            placeholder="Company name / Designation"
            ref={register({ required: true })}
          />
          {errors.designation && (
            <span className="warning">Designation is Required</span>
          )}
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="description"
            cols="20"
            rows="5"
            placeholder="Description"
            ref={register({ required: true })}
          />
          {errors.description && (
            <span className="warning">Description is required</span>
          )}
        </div>
        <input className="btn-send" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ReviewForm;
