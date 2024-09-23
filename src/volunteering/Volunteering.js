import React from 'react';
import styles from './Volunteering.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function Volunteering() {
    return (
        <div className={styles['Volunteering-container']}>
            <div className={styles['Volunteering-content']}>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={51} postIdtext={52} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={53} postIdtext={54} />
                </div>

                 <div className={styles['title']}>Some stories from our volunteers</div>
                <div className={styles['Story-content']}>
                    <SectionPictureLeft postIdphoto={55} postIdtext={56} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={57} postIdtext={58} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={59} postIdtext={60} />
                </div>
            </div>
        </div>
    );
}

export default Volunteering;