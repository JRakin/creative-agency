import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('name', data.name);
    formData.append('description', data.description);

    fetch('https://aqueous-reef-82491.herokuapp.com/addService', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        Swal.fire('Yes', 'New service added!', 'success');
      })
      .catch((error) => {
        // console.error(error);
      });
  };
  return (
    <div className="order-form p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group w-100 m-3">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Service Name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span className="warning">Service name is required</span>
          )}
        </div>

        <div className="form-group w-100 m-3">
          <textarea
            className="form-control description-text"
            name="description"
            ref={register({ required: true })}
            placeholder="Description"
            id=""
            cols="40"
            rows="5"
          ></textarea>
          {errors.description && (
            <span className="warning">Description name is required</span>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-brand m-3">
            {' '}
            Create
          </button>
          <div className="form-group w-100 m-3">
            <input
              name="file"
              type="file"
              id="file"
              className="ml-3"
              ref={register({ required: true })}
            />
            <label htmlFor="file">Photo</label> <br />
            {errors.file && <span className="warning">Photo is required</span>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
