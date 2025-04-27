import React from 'react';
import './ValueCard.css'
import { BiSolidBowlHot } from 'react-icons/bi';

const ValueCard = ({value}) => {
    return (
        <>
            <div className="value-card">
                <BiSolidBowlHot className='value-card-icon'/>
                <div className=".value-card-content">
                <a href="#" className='value-card-title'>
                    <h5>{value.title}</h5>
                </a>
                <p className="value-description">{value.description}</p>
                </div>
                
            </div>

        </>
    );
};

export default ValueCard;