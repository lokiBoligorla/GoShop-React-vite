

import 'react';
import '../App.css';


const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title"><img src="Picture/LOGO.jpg" className="logo" alt="Logo" />
      </h2>
      <input type="text" placeholder="Search" className="header-search" />
      <button className="header-link1">Login/SignUp</button>
      <div className="header-links">
        <h4 className="header-link">Men</h4>
        <h4 className="header-link">Women</h4>
        <h4 className="header-link">Children</h4>
        <h4 className="header-link">Beauty</h4>
      </div>
    </div>
  );
};

export default Header;

