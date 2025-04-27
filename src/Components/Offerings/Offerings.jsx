import React, { useEffect, useState } from 'react';
import './Offerings.css'
import FoodItemCard from '../FoodItemCard/FoodItemCard';

const Offerings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('food-package-data.json')
        .then(res=>res.json())
        .then(data=>setData(data))

        console.log(data);
    }, [setData, data]);
    
    return (
        <div>
            <div className="top-section padding-base flex justify-between">
                <h2 className="text-3xl font-bold uppercase text-black">Our Offerings</h2>
                <button type='button' className="btn-offering">View More</button>
            </div>
            {
                data.map((foodItem, index) => {
                    <FoodItemCard key={index} foodItem={foodItem} />
                })
            }
        </div>
    );
};

export default Offerings;