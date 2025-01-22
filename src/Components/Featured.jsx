

import 'react';
import '../App.css';

const FeaturedProducts = () => {
  const products = [
    { name: "Stylish Jacket", img: "Picture/Jacket.jpg", price: "$49.99" },
    { name: "Summer Dress", img: "Picture/Summer_Dress.jpg", price: "$29.99" },
    { name: "Kids T-shirt", img: "Picture/Kids_T_Shirt.jpg", price: "$15.99" },
    { name: "Beauty Kit", img: "Picture/Beauty_Kit.jpg", price: "$39.99" },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>View Product</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
