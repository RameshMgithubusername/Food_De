import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ category, setCategory }) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your culinary cravings.
      </p>
      <div className="explore-menu-list">                                                                                    
        {menu_list.map((item) => (
          <div 
            onClick={() => setCategory((prev) => (prev === item.menu_name ? "All " : item.menu_name))}
            key={item.menu_name} 
            className='explore-menu-list-item'
          >
            <img 
              className={category === item.menu_name ? "active" : ""} 
              src={item.menu_image} 
              alt={`Image of ${item.menu_name}`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
