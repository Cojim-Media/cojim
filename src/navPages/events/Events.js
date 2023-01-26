import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './event.css';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    end: new Date('2023-01-01T08:00:00.000'),
    start: new Date('2023-01-01T08:00:00.000'),
    title: 'Sunday Service',
  },
  {
    end: new Date('2023-01-08T08:00:00.000'),
    start: new Date('2023-01-08T08:00:00.000'),
    title: 'Sunday Service',
  },
  {
    end: new Date('2023-01-15T08:00:00.000'),
    start: new Date('2023-01-15T08:00:00.000'),
    title: 'Sunday Service',
  },
  {
    end: new Date('2023-01-22T08:00:00.000'),
    start: new Date('2023-01-22T08:00:00.000'),
    title: 'Sunday Service',
  },
  {
    end: new Date('2023-01-29T08:00:00.000'),
    start: new Date('2023-01-29T08:00:00.000'),
    title: 'Sunday Service',
  },
];

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>EVENTS</h2>
      </div>
      {/* For the events calender */}
      <div className="event">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            marginTop: '50px',
            marginBottom: '50px',
            width: '100%',
          }}
        />
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

export default Events;
