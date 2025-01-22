
import  { useState } from 'react';
import '../App.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle email submission (e.g., API call or validation)
    alert(`Thank you for subscribing with ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Your Shopping Site</h3>
          <p>&copy; 2025. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-right">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
