import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import '../services/Services.css';
import SectionTextLeft from '../section/SectionTextLeft';

function ExternalServices() {
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className='services-container'>
            <h2>External Services</h2>
            <div className='content'>
                <div className='nav-buttons-vertical'>
                    <button onClick={() => handleChangeIndex(0)} className='icon-button'>
                        <span>Southern Volunteering</span>
                    </button>
                    <button onClick={() => handleChangeIndex(1)} className='icon-button'>
                        <span>Junction Australia</span>
                    </button>
                    <button onClick={() => handleChangeIndex(2)} className='icon-button'>
                        <span>Mary Bywaters Memorial Kindergarten</span>
                    </button>
                    <button onClick={() => handleChangeIndex(3)} className='icon-button'>
                        <span>atWork Australia</span>
                    </button>
                    <button onClick={() => handleChangeIndex(4)} className='icon-button'>
                        <span>Mental Health Triage Service</span>
                    </button>
                    <button onClick={() => handleChangeIndex(5)} className='icon-button'>
                        <span>City of Onkaparinga</span>
                    </button>
                </div>
                <SwipeableViews index={index} onChangeIndex={handleChangeIndex} className='swipeable-views'>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={57}>
                            <span>Southern Volunteering Content</span>
                        </SectionTextLeft>
                    </div>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={59}>
                            <span>Junction Australia Content</span>
                        </SectionTextLeft>
                    </div>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={61}>
                            <span>Mary Bywaters Memorial Kindergarten Content</span>
                        </SectionTextLeft>
                    </div>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={63}>
                            <span>atWork Australia Content</span>
                        </SectionTextLeft>
                    </div>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={67}>
                            <span>Mental Health Triage Service Content</span>
                        </SectionTextLeft>
                    </div>
                    <div className='service-item'>
                        <SectionTextLeft postIdtext={69}>
                            <span>City of Onkaparinga Content</span>
                        </SectionTextLeft>
                    </div>
                </SwipeableViews>
            </div>
        </div>
    );
}

export default ExternalServices;