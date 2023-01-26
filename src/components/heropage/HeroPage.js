import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <>
      <Slider {...settings} className="slide">
        <div>
          <div className="heropage">
            <div className="hero-cont">
              <h1>Encounter Jesus Christ In Worship</h1>
              <h2>And Grow in Faith</h2>
              <Link className="hero-link" to="/">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="heropage2">
            <div className="hero-cont">
              <h1>Come Worship with us</h1>
              <h2>And Grow in Faith</h2>
              <Link className="hero-link" to="/">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default HeroPage;
