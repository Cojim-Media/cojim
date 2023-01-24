import React from 'react';
import './up.css';
import sermon from '../../img/sermon2.jpg';
import { TfiReload } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  return (
    <div className="upcoming">
      <div className="event-cont">
        <h1>More upcoming events</h1>
        <div className="serv-date">
          <div className="sunday">
            <h4>
              SUNDAY SERVICE{' '}
              <span>
                <TfiReload />
              </span>
            </h4>
            <p>Sunday | 8:00am</p>
          </div>
          <Link className="detail" to="/events">
            DETAILS
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="sermon-cont">
        <h1>Recent Sermons</h1>
        <div className="sermon-details">
          <p>May 25, 2018</p>
          <h5>LOVE GOD BECAUSE HE LOVES US</h5>
          <img src={sermon} alt="sermon" />
          <Link className="all-event" to="/sermon">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
