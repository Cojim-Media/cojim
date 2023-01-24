/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './media.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { FaYoutube } from 'react-icons/fa';

const Media = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>VIDEOS</h2>
      </div>
      <div className="media">
        <div>
          <iframe src="https://www.youtube.com/embed/Si_dSiOcLxk?controls=1"></iframe>
          <a
            className="media-btn"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCVuG_fLElXxA0KIsvcUOj0Q"
          >
            <FaYoutube /> Subscribe to our channel
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Media;
