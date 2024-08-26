import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p> {/* Fixed typo: Tilte -> Title */}
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}> {/* Added a unique key for each item */}
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} /> {/* Added alt text for better accessibility */}
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p> {/* Fixed typo: item.id -> item._id */}
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p> {/* Made 'x' clickable to remove item */}
                </div>
                <hr />
              </div>
            );
          }
          return null; // Return null if the item is not in the cart
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <hr />
          <div>
            <div className='div-cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='div-cart-total-details'>
              <p>Delevery Fees</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className='div-cart-total-details'>
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECK OUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here </p>
            <div className='cart-promocode-input'>
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
