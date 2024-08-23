import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { FaBook, FaRecycle, FaInfoCircle, FaGavel, FaPlus, FaEquals, FaLightbulb, FaLeaf, FaBalanceScale, FaCommentDots, FaMobileAlt,FaEye, FaClipboard, FaHandsHelping} from 'react-icons/fa';
import './Services.css';
import SectionTextRight from '../section/SectionTextRight';

function InternalServices() {
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className='services-container'>
            <h2>Internal Services</h2>
            <div className='nav-buttons'>
                <button onClick={() => handleChangeIndex(0)} className='icon-button'>
                    <FaBook />
                    <span>Book exchange</span>
                </button>
                <button onClick={() => handleChangeIndex(1)} className='icon-button'>
                    <FaRecycle />
                    <span>Recycling</span>
                </button>
                <button onClick={() => handleChangeIndex(2)} className='icon-button'>
                    <FaInfoCircle />
                    <span>Community information Board</span>
                </button>
                <button onClick={() => handleChangeIndex(3)} className='icon-button'>
                    <FaGavel />
                    <span>Justice of the peace</span>
                </button>
            </div>
            <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                <div className='service-item'>
                    <SectionTextRight postIdtext={48}>
                        <FaBook className='service-icon' />
                        <FaPlus className='service-icon' />
                        <FaRecycle className='service-icon' />
                        <FaEquals className='service-icon' />
                        <FaLightbulb className='service-icon' />
                        
                    </SectionTextRight>
                </div>
                <div className='service-item'>
                    <SectionTextRight postIdtext={51}>
                        <FaMobileAlt className='service-icon' />
                        <FaPlus className='service-icon' />
                        <FaRecycle className='service-icon' />
                        <FaEquals className='service-icon' />
                        <FaLeaf className='service-icon' />
                        
                    </SectionTextRight>
                </div>
                <div className='service-item'>
                    <SectionTextRight postIdtext={53}>
                        <FaEye className='service-icon' />
                        <FaPlus className='service-icon' />
                        <FaClipboard className='service-icon' />
                        <FaEquals className='service-icon' />
                        <FaHandsHelping className='service-icon' />
                    </SectionTextRight>
                </div>
                <div className='service-item'>
                    <SectionTextRight postIdtext={55}>
                        <FaGavel className='service-icon' />
                        <FaPlus className='service-icon' />
                        
                        <FaCommentDots className='service-icon' />
                        <FaEquals className='service-icon' />
                        <FaBalanceScale className='service-icon' />
                    </SectionTextRight>
                </div>
            </SwipeableViews>
        </div>
    );
}

export default InternalServices;