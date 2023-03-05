import React from 'react';
import './give.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Give = () => {
  return (
    <>
      <Navbar />
      {/* <div className="ab-sub">
        <h2>GIVE</h2>
      </div> */}
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
      </div>
      <Footer />
    </>
  );
};

export default Give;
