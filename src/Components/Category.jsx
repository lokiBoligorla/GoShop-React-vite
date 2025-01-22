

import 'react';
import '../App.css';

const Categories = () => {
  const categories = [
    { name: "Men", img: "Picture/Men.jpg", description: "Explore stylish and comfortable apparel for men. From casual to formal wear, find your perfect fit." },
    { name: "Women", img: "Picture/Women.jpg", description: "Discover a wide range of women's fashion, from trendy outfits to elegant classics." },
    { name: "Kids", img: "Picture/Kid.jpg", description: "Find fun, colorful, and comfortable clothing for kids of all ages." },
    { name: "Beauty", img: "Picture/Beauty.jpg", description: "Shop for skincare, makeup, and beauty essentials to enhance your natural glow." },
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.img} alt={category.name} className="category-img" />
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

