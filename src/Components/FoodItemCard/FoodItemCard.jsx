import React from 'react';

const FoodItemCard = ({foodItem}) => {

    
    //console.log(foodItem);

    return (
        <div>
            <h2>{foodItem.name}</h2>
        </div>
    );
};

export default FoodItemCard;