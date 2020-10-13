import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
  return (
    <div
      className="footer-container p-5"
      style={{ backgroundColor: '#fbd062' }}
    >
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <div className="mr-3">
              <h1 style={{ color: '#111430', fontWeight: '700' }}>
                Let us handle your <br /> project, professionally.
              </h1>
              <p
                className="text-justify my-4"
                style={{ color: '#111430', fontSize: '18px' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At id
                vitae quis ex reprehenderit iure sit mollitia deleniti ipsa
                nemo, expedita debitis sapiente. Autem, voluptates? Similique
                nobis ducimus numquam perferendis.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
