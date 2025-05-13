import React from 'react';
import './FoodItemCard.css'
import { FaCartShopping } from 'react-icons/fa6';

const FoodItemCard = ({foodItem}) => {

    
    console.log(foodItem.image);

    return (
        <div className='card'>
            <div>
                <h3 className='food-item-card-title'>{foodItem.name}</h3>
            <img className='card-image' src={foodItem.image} alt="food-image" />
            <p className="food-items-in-package"> <span className="food-items">Food Items in this package:</span> {foodItem.foods.join(', ')}</p>
            </div>
            <div className="shopping">
                <button className='shopping-btn' type="button">Buy Now</button>
                <FaCartShopping className='shopping-cart' />
            </div>
        </div>
    );
};

export default FoodItemCard;