import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import './local.css';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });
const Local = () => {
  const [price, setprice] = useState(0);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>LOCAL DONATIONS</h2>
      </div>
      {/* For the payment body */}
      <div className="local-body">
        <div className="l-left">
          <h2>Donations</h2>
          <p>
            kindly send your donations to the following Bank account numbers;
          </p>
          <div className="bank">
            <div>
              <p>
                Bank Name : <span>Ecobank</span>
              </p>
              <p>
                Account Name :
                <span> THE CITY OF JESUS INTERNATIONAL MINISTRY</span>
              </p>
              <p>
                Account Number :<span>1190009245 (Naira)</span>
              </p>
            </div>
            <div>
              <p>
                Bank Name : <span>First Bank</span>
              </p>
              <p>
                Account Name :
                <span> THE CITY OF JESUS INTERNATIONAL MINISTRY</span>
              </p>
              <p>
                Account Number :<span> 2035291271 (Naira)</span>
              </p>
            </div>
          </div>

          <span>Purpose of donation - </span>
          <ul>
            <li>LOGIF Partnership</li>
            <li>Seed sowing/Offering</li>
            <li>Tithe.</li>
          </ul>

          <p>All Donors Must send Proof of payment to the following;</p>

          <p>Email : donations@cojim.org</p>
          <p>
            Whatsapp : <span>+2347043315405</span>
          </p>
          <p>
            SMS : <span>+2347043315405</span>
          </p>

          <p className="note">
            Please state the purpose of your donation on the payment slip or the
            comment/note section of your bank transfer app.
          </p>

          <Link className="local-btn" to="/inter">
            INTERNATIONAL DONATIONS
          </Link>
        </div>
        {/* ONLINE PAYMENT */}
        <div className="l-right">
          <h2>Donate via PayPal</h2>
          <div className="cont">
            <label>Enter a Price:</label>
            <input
              type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </div>
        </div>
      </div>
      <div className="about-socio l-icon">
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
      <Footer />
    </>
  );
};

export default Local;
