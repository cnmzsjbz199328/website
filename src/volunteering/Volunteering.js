import React from 'react';
import styles from './Volunteering.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function Volunteering() {
    return (
        <div className={styles['Volunteering-container']}>
            <div className={styles['Volunteering-content']}>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={54} postIdtext={55} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={56} postIdtext={57} />
                </div>

                <h1>Some stories from our volunteers</h1>
                <div className={styles['Story-content']}>
                    <SectionPictureLeft postIdphoto={58} postIdtext={59} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={60} postIdtext={61} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={62} postIdtext={63} />
                </div>
            </div>
        </div>
    );
}

export default Volunteering;