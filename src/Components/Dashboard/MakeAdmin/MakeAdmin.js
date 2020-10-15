import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="order-form p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="Email *"
            ref={register({ required: true })}
          />
          {errors.email && <span className="warning">Email is Required</span>}
        </div>
        <input className="btn-send" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
