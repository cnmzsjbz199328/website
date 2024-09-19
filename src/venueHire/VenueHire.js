import React from 'react';
import styles from './VenueHire.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function VenueHire() {
  return (
    <div className={styles['venuehire-container']}>
      <div className={styles['venuehire-content']}>

        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={40} postIdtext={41} />
        </div>
        <h1>Venue Hire Details</h1>
        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={42} postIdtext={43} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={44} postIdtext={45} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={46} postIdtext={47} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={48} postIdtext={49} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureRight postIdphoto={50} postIdtext={51} />
        </div>
        <div className={styles['section-container']}>
          <SectionPictureLeft postIdphoto={52} postIdtext={53} />
        </div>
      </div>
    </div>
  );
}

export default VenueHire;