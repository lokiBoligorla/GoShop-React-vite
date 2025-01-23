

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
        <h4 className="header-link"><a href="#categories">Men</a> </h4>
        <h4 className="header-link"><a href="#categories">Women</a></h4>
        <h4 className="header-link"><a href="#categories">Children</a></h4>
        <h4 className="header-link"><a href="#categories">Beauty</a></h4>
      </div>
    </div>
  );
};

export default Header;

