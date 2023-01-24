import React from 'react';
import './give.css';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Give = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>GIVE</h2>
      </div>
      <div className="give-body">
        <div className="give-cont">
          <div className="img1">
            <h3>LOCAL DONATIONS</h3>
            <Link className="don-btn" to="/local">
              Donate
            </Link>
          </div>
          <div className="img2">
            <h3>INTERNATIONAL DONATIONS</h3>
            <Link className="don-btn" to="/inter">
              Donate
            </Link>
          </div>
        </div>
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
      <Footer />
    </>
  );
};

export default Give;
