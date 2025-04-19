import React from 'react';
import './OurCoreValues.css'
import ValueCard from '../ValueCard/ValueCard';

const OurCoreValues = ({core_values}) => {
    return (
        <div className='our-core-value bg-[#50591A] text-center'>
            <h2 className='core-value-title uppercase text-[#FCC14F] font-bold text-3xl'>Our Core Values</h2>
            <div className="core-values grid grid-cols-4 gap-4 ">
                {
                    core_values.map(value => <ValueCard value={value}/>)
                }
                
            </div>
        </div>
    );
};

export default OurCoreValues;