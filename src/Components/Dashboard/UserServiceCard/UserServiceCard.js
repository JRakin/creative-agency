import React from 'react';

const UserServiceCard = ({ service }) => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          {service.image ? (
            <img
              className="w-25"
              src={`data:image/png;base64,${service.image.img}`}
              alt=""
            />
          ) : (
            <img src="" alt="none" />
          )}
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserServiceCard;
