import React from 'react';

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="col-md-4">
      <div className="card p-2">
        <div className="card-body">
          <div className="d-flex">
            <img className="w-25" src={feedback.image} alt="" />
            <div className="p-3">
              <h6>{feedback.name}</h6>
              <small>{feedback.designation}</small>
            </div>
          </div>
          <p className="my-2">{feedback.review}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
