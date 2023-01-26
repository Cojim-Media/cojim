import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import img from '../../img/logo.png';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Pat.css';

const Partner = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>PARTNERSHIP</h2>
      </div>
      <div className="pat-body">
        <div className="pat-cont">
          <div className="pat-left">
            <p>
              If you would like to partner with us kindly click the button
              below.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/xN4jAQ57iyAkJPYc7"
            >
              Sign Up
            </a>
          </div>
          <div className="pat-right">
            <img src={img} alt="logo" />
            <div className="patR-para">
              <p>
                Address:{' '}
                <span>
                  COJIM PERMANENT SITE ADDRESS: IN/20, EMENE INDUSTRIAL LAYOUT,
                  OPPOSITE INNOSON TECHNICAL COMPANY, ABAKALIKI EXPRESS WAY,
                  ENUGU EAST LOCAL GOVERNMENT AREA, ENUGU STATE NIGERIA.
                </span>
              </p>
              <p>
                Contact: <span>+2347043315405</span>
              </p>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
