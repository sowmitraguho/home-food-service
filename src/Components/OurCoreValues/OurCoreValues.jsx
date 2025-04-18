import React from 'react';
import './OurCoreValues.css'
import ValueCard from '../ValueCard/ValueCard';

const OurCoreValues = ({core_values}) => {
    return (
        <div className='p-16'>
            <h2 className='uppercase'>Our Core Values</h2>
            <div className="core-values">
                {
                    core_values.map(value => <ValueCard value={value}/>)
                }
                
            </div>
        </div>
    );
};

export default OurCoreValues;