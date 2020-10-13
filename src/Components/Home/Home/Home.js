import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import OurWorks from '../OurWorks/OurWorks';
import Partners from '../Partners/Partners';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Partners></Partners>
      <OurServices></OurServices>
      <OurWorks></OurWorks>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
