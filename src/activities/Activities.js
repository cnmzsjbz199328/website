import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from '../activities/Activities.module.css';
import SectionTextRight from '../section/SectionTextRight';
import OpArtEffect from '../specialEffect/OpArtEffect';
import DancingTrees from '../specialEffect/DancingTrees';
import Nucl from '../specialEffect/Nucl';
import Section from '../section/Section';

function Activities() {
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className={styles['activities-container']}>
            <div className={styles['content']}>
                <div className={styles['nav-buttons-vertical']}>
                    <button onClick={() => handleChangeIndex(0)} className={styles['icon-button']}>
                        <span>Hobbies</span>
                    </button>
                    <button onClick={() => handleChangeIndex(1)} className={styles['icon-button']}>
                        <span>Exercises</span>
                    </button>
                    <button onClick={() => handleChangeIndex(2)} className={styles['icon-button']}>
                        <span>For the Kids</span>
                    </button>
                    <button onClick={() => handleChangeIndex(3)} className={styles['icon-button']}>
                        <span>Technical Help</span>
                    </button>
                    <button onClick={() => handleChangeIndex(4)} className={styles['icon-button']}>
                        <span>Community Projects</span>
                    </button>
                    <button onClick={() => handleChangeIndex(5)} className={styles['icon-button']}>
                        <span>Education and Services</span>
                    </button>
                    <button onClick={() => handleChangeIndex(6)} className={styles['icon-button']}>
                        <span>Special Interest</span>
                    </button>
                </div>
                <SwipeableViews index={index} onChangeIndex={handleChangeIndex} className={styles['swipeable-views']}>
                    <div className={styles['activity-item']}>
                    <Section postId={21} />
                    <Section postId={22} />
                    <Section postId={23} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={24} />
                    <Section postId={25} />
                    <Section postId={26} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={27} />
                    <Section postId={28} />
                    <Section postId={29} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={30} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={31} />
                    <Section postId={32} />
                    <Section postId={33} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={34} />
                    <Section postId={35} />
                    <Section postId={36} />
                    </div>
                    <div className={styles['activity-item']}>
                    <Section postId={37} />
                    <Section postId={38} />
                    <Section postId={39} />
                    </div>
                </SwipeableViews>
            </div>
        </div>
    );
}

export default Activities;