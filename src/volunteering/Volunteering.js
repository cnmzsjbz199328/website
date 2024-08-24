import React from 'react';
import styles from './Volunteering.module.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function Volunteering() {
    return (
        <div className={styles['Volunteering-container']}>
            <div className={styles['Volunteering-content']}>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={185} postIdtext={188} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={190} postIdtext={193} />
                </div>

                <h1>Some stories from our volunteers</h1>
                <div className={styles['Story-content']}>
                    <SectionPictureLeft postIdphoto={199} postIdtext={207} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureRight postIdphoto={195} postIdtext={205} />
                </div>
                <div className={styles['section-container']}>
                    <SectionPictureLeft postIdphoto={202} postIdtext={209} />
                </div>
            </div>
        </div>
    );
}

export default Volunteering;