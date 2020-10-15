import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-reef-82491.herokuapp.com/getAllReview')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-5">
      <h2
        className="text-center py-4 my-3"
        style={{ color: '#111430', fontWeight: '700' }}
      >
        Clients <span style={{ color: '#9DC685' }}>Feedback</span>
      </h2>
      <div className="container py-5">
        <div className="row">
          {reviews.map((feedback) => (
            <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
