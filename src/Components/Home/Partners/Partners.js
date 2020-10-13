import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';

const Partners = () => {
  return (
    <div className="container">
      <div className="py-5 mt-5 text-center">
        <img style={{ width: '150px' }} className="mr-5" src={google} alt="" />
        <img style={{ width: '150px' }} className="mr-5" src={airbnb} alt="" />
        <img style={{ width: '150px' }} className="mr-5" src={netflix} alt="" />
        <img style={{ width: '150px' }} className="mr-5" src={slack} alt="" />
        <img style={{ width: '150px' }} className="" src={uber} alt="" />
      </div>
    </div>
  );
};

export default Partners;
