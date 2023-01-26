import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import sermon from '../../img/sermon2.jpg';
// import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './sermon.css';

const Sermons = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>SERMONS</h2>
      </div>
      <div className="ser-hold">
        <div className="ser-cont">
          <div className="sermon-quote">
            <img src={sermon} alt="sermon" />
            <h3>
              Love God because He <br /> loves us
            </h3>
            <p>
              <SlCalender className="calc" />
              posted on May 25, 2018 | pastor: <span>Wiseman Christoper</span>
            </p>
            <div className="about-socio">
              <a
                target="_blank"
                href="https://web.facebook.com/ChristopherOrjiMinistriesCOJIM?mibextid=ZbWKwL&_rdc=1&_rdr"
                className="socio-fb"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/cojimofficiel?t=gM2yvX_4GzUAgcdXD-rP8g&s=09"
                className="socio-tw"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@cojim?_t=8Z9fouq804D&_r=1"
                className="socio-tik"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/cojimofficiel/?igshid=YmMyMTA2M2Y%3D"
                className="socio-in"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sermons;
