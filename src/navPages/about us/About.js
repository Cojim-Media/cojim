import React from 'react';
import './about.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>ABOUT US</h2>
      </div>
      {/* body */}
      <div className="ab-body">
        <div className="ab-one">
          <h2>Our Statement of Faith.</h2>
          <div className="one-p">
            <p>
              God and His Word are one. God's Word represents His Heart's
              desire. Jesus is the Word by whom God speaks to us. The Holy
              Spirit is the One who reveals Jesus to us. <br /> We believe that
              Holy men of God were carried along by the Holy Spirit as they
              spoke the message that came from God. The Words of God are Spirit
              and Life. The Holy Bible which is the perfect union between the
              Word and Spirit of God in our hearts is more than long-ago events
              and ancient wisdom. It is God's message of grace and truth to us
              today (2Timothy 3:16; 2peter 1:21). <br /> We believe that sin
              points one to eternal death and destruction but God's Word points
              one to life. If Christ Jesus is our Lord and Saviour, a new body,
              a new soul and a new spirit await us one day. God's Spirit joins
              Himself to our spirit to declare that we are God's children -
              children who are set free from sin and it's penalties ( Roman
              8:16). <br /> We believe that salvation is to be set free from sin
              and its penalties and it is received by faith in the cleansing
              power of the Blood of Jesus Christ. Each person has to accept
              Jesus as his or her personal Lord and Saviour, otherwise Jesus'
              death will not save him or her. That is, they must be born again.
              Not only must we have God's Word but also His Spirit, mixed with
              repentance and faith in our hearts. Repentance is the only hope
              for God's mercy. Where there is repentance, there is mercy and
              where there is mercy there is forgiveness, healing, Salvation and
              all of God's Blessings. We believe that divine healing is the
              supernatural power of God bringing health to the human body and it
              is received by faith in the finished work of our Lord and Saviour
              Jesus Christ. All the punishment Jesus Christ received before and
              during His crucifixion was for our healing - spirit, soul and
              body. By His stripes, we are healed. Jesus went to the Cross and
              made us fit for God.
            </p>
          </div>
        </div>
        <div className="ab-two">
          <h2>Our Mission Statement.</h2>
          <div className="two-cont">
            <p className="one-p">
              Our mission is to preach and teach all nations and every creature,
              the gospel of our Lord and Saviour Jesus Christ, in both words and
              Life and with it, bring the lost sheep to the Kingdom of God.
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

export default About;
