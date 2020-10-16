import React from 'react';

const UserServiceCard = ({ service }) => {
  return (
    <div className="col-md-6">
      <div className="card m-3 p-3">
        <div className="card-body">
          <div className="d-flex justify-content-between my-2 text-center">
            {service.image ? (
              <img
                className="w-25"
                src={`data:image/png;base64,${service.image.img}`}
                alt=""
              />
            ) : (
              <img className="w-25" src="" alt="none" />
            )}
            <p>{service.status}</p>
          </div>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserServiceCard;
