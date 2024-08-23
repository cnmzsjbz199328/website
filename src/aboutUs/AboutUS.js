import React from 'react';
//import './AboutUs.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Learn more about who we are and what we do.</p>
      <SectionPictureLeft postIdphoto={1} postIdtext={37} />
      <SectionPictureRight postIdphoto={2} postIdtext={39} />
      <SectionPictureLeft postIdphoto={1} postIdtext={41} />
      <SectionPictureRight postIdphoto={2} postIdtext={46} />
    </div>
  );
}

export default AboutUs;

