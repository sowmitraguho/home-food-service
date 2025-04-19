import React from 'react';
import { BiSolidBowlHot } from 'react-icons/bi';

const ValueCard = ({value}) => {
    return (
        <div>
            <div className="max-w-sm p-16 bg-[#50591A] h-full border-r-1 border-white ">
                <BiSolidBowlHot className='w-full h-12 text-white'/>
                <div className="text-center">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#FCC14F]">{value.title}</h5>
                </a>
                <p className="mb-3 font-normal text-white">{value.description}</p>
                </div>
                
            </div>

        </div>
    );
};

export default ValueCard;