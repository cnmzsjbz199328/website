import React from 'react';
import styles from './AboutUs.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import Section from '../section/Section';

function AboutUs() {
  return (
    <div className={styles['about-us-container']}>
      <div className={styles['about-us-content']}>

        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={2} postIdtext={3} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={4} postIdtext={5} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={6} postIdtext={7} />
        </div>

        <div className={styles['AboutUs-title']}>Our Story</div>
        <div className={styles['story-container']}>
          <Section postId={8} />
          <Section postId={9} />
          <Section postId={10} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

