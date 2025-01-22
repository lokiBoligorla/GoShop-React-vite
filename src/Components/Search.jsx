
import 'react';
import '../App.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for products..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
