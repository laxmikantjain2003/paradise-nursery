import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

const LandingPage = () => (
  <div className="landing-page">
    <div className="landing-content">
      <h1>Paradise Nursery</h1>
      <p>Where Green Meets Serenity</p>
      <Link to="/products" className="get-started-btn">Get Started</Link>
      <AboutUs />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}
export default App;