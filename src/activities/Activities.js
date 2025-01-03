import React from 'react';
import styles from '../activities/Activities.module.css';
import Section from '../section/Section';

function Activities() {
    return (
        <div className={styles['activities-container']}>
            <div className={styles['content']}>
                <div className={styles['nav-buttons-vertical']}>
                    <button onClick={() => document.getElementById('hobbies').scrollIntoView()} className={styles['icon-button']}>
                        <span>Hobbies</span>
                    </button>
                    <button onClick={() => document.getElementById('exercises').scrollIntoView()} className={styles['icon-button']}>
                        <span>Exercises</span>
                    </button>
                    <button onClick={() => document.getElementById('kids').scrollIntoView()} className={styles['icon-button']}>
                        <span>For the Kids</span>
                    </button>
                    <button onClick={() => document.getElementById('technical-help').scrollIntoView()} className={styles['icon-button']}>
                        <span>Technical Help</span>
                    </button>
                    <button onClick={() => document.getElementById('community-projects').scrollIntoView()} className={styles['icon-button']}>
                        <span>Community Projects</span>
                    </button>
                    <button onClick={() => document.getElementById('education-services').scrollIntoView()} className={styles['icon-button']}>
                        <span>Education and Services</span>
                    </button>
                    <button onClick={() => document.getElementById('special-interest').scrollIntoView()} className={styles['icon-button']}>
                        <span>Special Interest</span>
                    </button>
                </div>
                <div>
                    <h2 className={styles['activity-title']}>Hobbies</h2>
                    <div className={styles['activity-item']} id="hobbies">
                        <Section postId={21} />
                        <Section postId={22} />
                        <Section postId={23} />
                    </div>
                    <h2 className={styles['activity-title']}>Exercises</h2>
                    <div className={styles['activity-item']} id="exercises">
                        <Section postId={24} />
                        <Section postId={25} />
                    </div>
                    <h2 className={styles['activity-title']}>For the Kids</h2>
                    <div className={styles['activity-item']} id="kids">
                        <Section postId={26} />
                        <Section postId={27} />
                        <Section postId={28} />
                    </div>
                    <h2 className={styles['activity-title']}>Technical Help</h2>
                    <div className={styles['activity-item']} id="technical-help">
                        <Section postId={29} />
                    </div>
                    <h2 className={styles['activity-title']}>Community Projects</h2>
                    <div className={styles['activity-item']} id="community-projects">
                        <Section postId={30} />
                        <Section postId={31} />
                        <Section postId={32} />
                    </div>
                    <h2 className={styles['activity-title']}>Education and Services</h2>
                    <div className={styles['activity-item']} id="education-services">
                        <Section postId={33} />
                        <Section postId={34} />
                        <Section postId={35} />
                    </div>
                    <h2 className={styles['activity-title']}>Special Interest</h2>
                    <div className={styles['activity-item']} id="special-interest">
                        <Section postId={36} />
                        <Section postId={37} />
                        <Section postId={38} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;