import React from 'react';
import './OurCoreValues.css'
import ValueCard from '../ValueCard/ValueCard';

const OurCoreValues = ({core_values}) => {
    return (
        <div className='our-core-value text-center'>
            <h2 className='core-value-title'>Our Core Values</h2>
            <div className="core-values">
                {
                    core_values.map(value => <ValueCard value={value}/>)
                }
                
            </div>
        </div>
    );
};

export default OurCoreValues;