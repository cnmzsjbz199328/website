import React from 'react';
import styles from './VenueHire.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function VenueHire() {
  return (
    <div className={styles['venuehire-container']}>
      <div className={styles['venuehire-content']}>

        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={40} postIdtext={39} />
        </div>
        <div className={styles['title']}>Venue Hire Details</div>
        <div className={styles['sub-title']}>
          Please Note - the listed prices are for week days and week nights ONLY. Please refer to the SpacetoCo web page for weekend costs.
          <a href="https://www.spacetoco.com/host/reynella-neighbourhood-centre-inc" target="_blank" rel="noopener noreferrer">CLICK HERE TO MAKE A BOOKING</a>
        </div>


        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={41} postIdtext={42} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={43} postIdtext={44} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={45} postIdtext={46} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={47} postIdtext={48} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={49} postIdtext={50} />
        </div>
      </div>
    </div>
  );
}

export default VenueHire;