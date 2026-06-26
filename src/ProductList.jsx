import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Header from './Header';

const plantsArray = [
  {
    category: "Air Purifying",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://cdn.pixabay.com/photo/2020/04/09/14/05/snake-plant-5021674_1280.jpg" },
      { id: 2, name: "Spider Plant", price: 12, image: "https://cdn.pixabay.com/photo/2018/07/20/12/32/spider-plant-3550604_1280.jpg" }
    ]
  },
  {
    category: "Aromatic",
    plants: [
      { id: 3, name: "Lavender", price: 20, image: "https://cdn.pixabay.com/photo/2015/07/04/19/22/lavender-831899_1280.jpg" },
      { id: 4, name: "Mint", price: 10, image: "https://cdn.pixabay.com/photo/2016/01/02/02/03/mint-1117565_1280.jpg" }
    ]
  },
  {
    category: "Low Maintenance",
    plants: [
      { id: 5, name: "ZZ Plant", price: 18, image: "https://cdn.pixabay.com/photo/2021/04/03/15/45/zz-plant-6147986_1280.jpg" },
      { id: 6, name: "Aloe Vera", price: 14, image: "https://cdn.pixabay.com/photo/2020/03/30/17/23/aloe-vera-4984850_1280.jpg" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      image: plant.image,
      cost: plant.price
    }));
  };

  // Check agar plant pehle se cart mein hai ya nahi
  const isAddedToCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      <Header />
      <div className="product-list-container">
        {plantsArray.map((categoryGroup, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plant-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">${plant.price}</p>
                  
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAddedToCart(plant.name)}
                    className={isAddedToCart(plant.name) ? 'added-btn' : 'add-btn'}
                  >
                    {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;