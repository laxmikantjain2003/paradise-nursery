import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Redux store se cart items nikal kar total quantity calculate karna
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <h2>Paradise Nursery</h2>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">
          Cart <span className="cart-badge">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;