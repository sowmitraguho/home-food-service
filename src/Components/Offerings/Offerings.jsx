import React, { useEffect, useState } from 'react';
import './Offerings.css'
import FoodItemCard from '../FoodItemCard/FoodItemCard';

const Offerings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('food-package-data.json')
        .then(res=>res.json())
        .then(data=>setData(data))

        //console.log(data);
    }, [setData, data]);
    //console.log(data);
    return (
        <div className='offering-section'>
            <div className="offering-top-section">
                <h2 className="">Our Offerings</h2>
                <p></p>
                <button type='button' className="btn-offering">View More</button>
            </div>
            <div className="food-item-boxes">
            {
                data.map((foodItem, index) => 
                    <><FoodItemCard key={index} foodItem={foodItem} /></>
                )
            }
            </div>
        </div>
    );
};

export default Offerings;