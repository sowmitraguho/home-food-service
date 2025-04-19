import React from 'react';
import './Home.css'
import { BiSolidBowlHot } from 'react-icons/bi';
import banner from './../../assets/food banner.jpg'
import OurCoreValues from '../OurCoreValues/OurCoreValues';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData();
    console.log(data.core_values);
    return (
        <>
            <div className='banner-container'>
                <div className="heading">
                    <h2 className='text-uppercase text-5xl'>Discover Culinary Excellence</h2>
                    <p className='text-italic font-52'>with khadok</p>
                </div>
                <div className="badge-container">
                    <div className="badge">
                        <svg id='svg' viewBox='0 0 100 100'>
                            <defs>
                                <path id='circle' d='
                        M 50, 50
                        m -37, 0
                        a 37, 37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0'/>
                            </defs>
                            <text fontSize={12.2}>
                                <textPath xlinkHref='#circle'>
                                    Khadok High Quality . Khadok High Quality .
                                </textPath>
                            </text>
                        </svg>
                        <div className="image-container">
                            <BiSolidBowlHot />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-image">
                <img src={banner} />
            </div>
            <OurCoreValues core_values = {data.core_values} />
        </>
    );
};

export default Home;