import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Header from './Header';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const plantsArray = [
    { category: "Air Purifying", plants: [{ name: "Snake Plant", price: 15, image: "url1" }, { name: "Spider Plant", price: 12, image: "url2" }] },
    { category: "Aromatic", plants: [{ name: "Lavender", price: 20, image: "url3" }, { name: "Mint", price: 10, image: "url4" }] },
    { category: "Low Maintenance", plants: [{ name: "ZZ Plant", price: 18, image: "url5" }, { name: "Aloe Vera", price: 14, image: "url6" }] }
  ];

  return (
    <div>
      <Header />
      {plantsArray.map((group, idx) => (
        <div key={idx}>
          <h2>{group.category}</h2>
          {group.plants.map(p => (
            <div key={p.name}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button 
                disabled={cartItems.some(i => i.name === p.name)}
                onClick={() => dispatch(addItem({name: p.name, image: p.image, cost: p.price}))}>
                {cartItems.some(i => i.name === p.name) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ProductList;