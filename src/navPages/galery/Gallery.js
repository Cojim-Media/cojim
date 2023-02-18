import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { SermonData, TesData } from './galleryData';
import './gallery.css';

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="ab-sub">
        <h2>Gallery</h2>
      </div>
      {/* The main gallery page */}
      <div className="gal-body">
        <div className="gal-cont">
          <h2>Sermons</h2>
          <div className="gal-img">
            {SermonData.map((sermon, key) => {
              return <img key={key} src={sermon.img} alt="" />;
            })}
          </div>
        </div>
        <div className="gal-cont">
          <h2>Testimonies</h2>
          <div className="gal-img">
            {TesData.map((Tes, key) => {
              return <img key={key} src={Tes.img} alt="" />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
