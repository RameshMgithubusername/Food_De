import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Ensure food_list is defined and handle empty array case
    if (food_list === undefined) return <div>Loading...</div>;
    if (food_list.length === 0) return <div>No items available</div>;

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list
                    .filter(item => category === "All" || category === item.category)
                    .map(item => (
                        <FoodItem
                            key={item._id} 
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default FoodDisplay;
