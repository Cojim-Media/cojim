import React from 'react';
import { Link } from 'react-router-dom';
import './test.css';

const Testimonies = () => {
  return (
    <div className="test-cont">
      <Link to="/" className="test">
        <span>Testimonies</span>
      </Link>
      <Link to="/" className="pray">
        <span>Prayer Request</span>
      </Link>
      <Link to="/" className="sermon">
        <span>Sermons Archive</span>
      </Link>
    </div>
  );
};

export default Testimonies;
