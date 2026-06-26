import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Header from './Header';
import './CartItem.css'; // Optional: Iske liye CSS niche di hai

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total cost calculate karna (har item ka price * quantity)
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.cost}</p>
              <p>Subtotal: ${item.cost * item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-actions">
          <button onClick={() => window.location.href='/products'}>Continue Shopping</button>
          <button onClick={() => alert('Coming Soon!')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;