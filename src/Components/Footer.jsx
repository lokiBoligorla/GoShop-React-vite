import { useState } from 'react';
import '../App.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-brand">GoShop</h1>
          <p className="footer-description">Your go-to store for everything you need. Quality, convenience, and affordability at your fingertips.</p>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        <div className="footer-right">
          <h4 className="subscribe-heading">Join Our Newsletter</h4>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              className="subscribe-input" 
              required 
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GoShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
