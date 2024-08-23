import React from 'react';
import styles from './AboutUs.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import Section from '../section/Section';

function AboutUs() {
  return (
    <div className={styles['about-us-container']}>
      <div className={styles['about-us-content']}>
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do.</p>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={1} postIdtext={37} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={215} postIdtext={39} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={222} postIdtext={41} />
        </div>
        <h1>Our Story</h1>
        <div className={styles['story-container']}>
          <Section postId={46} />
          <Section postId={230} />
          <Section postId={233} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

