import React from 'react';
import './cal.css';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Calender = () => {
  return (
    <div className="ca-cont">
      <div className="events">
        <SlCalender className="calender" />
        <div className="next">
          <span>Next</span>
          <h4>UPCOMING EVENT</h4>
        </div>
      </div>
      <div className="date">
        <h3>SUNDAY SERVICE</h3>
        <p>January 15, 2023</p>
      </div>

      <Link className="all-event" to="/events">
        ALL EVENTS
      </Link>
    </div>
  );
};

export default Calender;
