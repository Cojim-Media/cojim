import React from 'react';
import Calender from './components/calender/Calender';
import Footer from './components/footer/Footer';
import HeroPage from './components/heropage/HeroPage';
import Navbar from './components/navbar/Navbar';
import Testimonies from './components/testimonies/Testimonies';
import Upcoming from './components/upcoming/Upcoming';
import Youtube from './components/youtube/Youtube';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Calender />
      <Testimonies />
      <Upcoming />
      <Youtube />
      <Footer />
    </div>
  );
};

export default Home;
