import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import '../activities/Activities.module.css';
import SectionTextRight from '../section/SectionTextRight';
import OpArtEffect from '../specialEffect/OpArtEffect';
import DancingTrees from '../specialEffect/DancingTrees';
import Nucl from '../specialEffect/Nucl';

function Activities() {
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className='activities-container'>
            <h1>Welcome to Our Activities</h1>
            <p>This is the Activities page of our site.</p>
            <div className='content'>
                <div className='nav-buttons-vertical'>
                    <button onClick={() => handleChangeIndex(0)} className='icon-button'>
                        <span>Hobbies</span>
                    </button>
                    <button onClick={() => handleChangeIndex(1)} className='icon-button'>
                        <span>Exercises</span>
                    </button>
                    <button onClick={() => handleChangeIndex(2)} className='icon-button'>
                        <span>For the Kids</span>
                    </button>
                    <button onClick={() => handleChangeIndex(3)} className='icon-button'>
                        <span>Technical Help</span>
                    </button>
                    <button onClick={() => handleChangeIndex(4)} className='icon-button'>
                        <span>Community Projects</span>
                    </button>
                    <button onClick={() => handleChangeIndex(5)} className='icon-button'>
                        <span>Education and Services</span>
                    </button>
                    <button onClick={() => handleChangeIndex(6)} className='icon-button'>
                        <span>Special Interest</span>
                    </button>
                </div>
                <SwipeableViews index={index} onChangeIndex={handleChangeIndex} className='swipeable-views'>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={90}>
                        <OpArtEffect />                     
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={92}>
                        <DancingTrees />
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={96}>
                        <Nucl />
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={98}>
                            <span className='special-effect'>Technical Help Content</span>
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={100}>
                            <span className='special-effect'>Community Projects Content</span>
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={102}>
                            <span className='special-effect'>Education and Services Content</span>
                        </SectionTextRight>
                    </div>
                    <div className='activity-item'>
                        <SectionTextRight postIdtext={22}>
                            <span className='special-effect'>Special Interest Content</span>
                        </SectionTextRight>
                    </div>
                </SwipeableViews>
            </div>
        </div>
    );
}

export default Activities;