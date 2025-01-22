import  { useState } from 'react';
import '../App.css';

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      image: 'Picture/Banner_1.jpg',
      title: 'Welcome to GoShop!',
      text: 'Discover the latest trends for Men, Women, and Kids. Shop your favorite styles with amazing offers!',
    },
    {
      image: 'Picture/Banner_2.jpg',
      title: 'Exclusive Offers!',
      text: 'Hurry! Grab the best deals of the season before they are gone.',
    },
    {
      image: 'Picture/Banner_3.jpg',
      title: 'New Arrivals!',
      text: 'Check out the latest additions to our collection. Be the first to shop.',
    },
    {
      image: 'Picture/Banner_4.jpg',
      title: 'Holiday Sale!',
      text: 'Celebrate the holidays with huge discounts on your favorite items.',
    },
  ];

  const changeBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">{banners[currentBanner].title}</h1>
        <p className="banner-text">{banners[currentBanner].text}</p>
        <button className="banner-button" onClick={changeBanner}>
          Visit GoShop
        </button>
      </div>
      <div className="banner-image">
        <img
          src={banners[currentBanner].image}
          alt="Shopping Banner"
          className="banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;

