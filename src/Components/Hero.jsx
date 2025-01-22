

import 'react';
import '../App.css';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-content">
        <div className="text-content">
          <h1>Exclusive Offers & Deals</h1>
          <p>Unlock amazing discounts and get access to exclusive collections. Your shopping experience just got better.</p>
          <ul className="offer-list">
            <li>Up to 50% Off on Selected Products</li>
            <li>Free Shipping on Orders Over $50</li>
            <li>Exclusive Members-Only Deals</li>
          </ul>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="image-content">
          <img src="Picture/Landing_Page.jpg" alt="Landing Page" className="landing-image" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
