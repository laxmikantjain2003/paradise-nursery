import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

const LandingPage = () => (
  <div className="landing-page">
    <div className="landing-content">
      <h1>Paradise Nursery</h1>
      <p>Where Green Meets Serenity</p>
      
      <a href="/products" className="get-started-btn">
        Get Started
      </a>
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
        {/* Sirf ek hi route hona chahiye /cart ke liye */}
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;