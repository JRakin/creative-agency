import React from 'react';

const UserServiceCard = ({ service }) => {
  return (
    <div className="col-md-6">
      <div className="card m-3 p-3">
        <div className="card-body">
          <div className="d-flex justify-content-between my-2">
            {service.image ? (
              <img
                className="w-25"
                src={`data:image/png;base64,${service.image.img}`}
                alt=""
              />
            ) : (
              <img className="w-25" src="" alt="none" />
            )}
            <div>
              <h6
                className={
                  service.status === 'pending'
                    ? 'pending-status'
                    : service.status === 'done'
                    ? 'done-status'
                    : 'onGoing-status'
                }
                style={{ textTransform: 'uppercase' }}
              >
                {service.status}
              </h6>
            </div>
          </div>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserServiceCard;
