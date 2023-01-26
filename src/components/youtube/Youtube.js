/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './you.css';

const Youtube = () => {
  return (
    <div className="youT">
      <iframe src="https://www.youtube.com/embed/Un4MCnj1E7o?controls=1"></iframe>
      <div className="youT-p">
        <p>
          Our mission is to preach and teach all nations and every creature, the
          gospel of our lord and saviour Jesus Christ
        </p>
      </div>
    </div>
  );
};

export default Youtube;
