import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Header from './Header';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h2>Total: ${cartItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0)}</h2>
      {cartItems.map(item => (
        <div key={item.name}>
          <img src={item.image} alt={item.name} />
          <p>{item.name} - ${item.cost * item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity - 1}))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
    </div>
  );
};
export default CartItem;