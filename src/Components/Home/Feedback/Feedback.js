import React from 'react';
import customer1 from '../../../images/customer-1.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
  const feedbackData = [
    {
      id: '1',
      name: 'Nash Patrick',
      designation: 'CEO, Manpal',
      review:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, pariatur.',
      image: customer1,
    },
    {
      id: '2',
      name: 'Nash Patrick',
      designation: 'CEO, Manpal',
      review:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, pariatur.',
      image: customer1,
    },
    {
      id: '3',
      name: 'Nash Patrick',
      designation: 'CEO, Manpal',
      review:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, pariatur.',
      image: customer1,
    },
  ];
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
          {feedbackData.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback}></FeedbackCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
