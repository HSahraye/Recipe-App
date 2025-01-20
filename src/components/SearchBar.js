import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // State to hold the search query entered by the user
  const [query, setQuery] = useState('');

  // Handle input changes in the search bar
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Trigger the search function when the user presses the "Search" button
  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);  // Pass the search query to the parent (App component)
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={handleChange}  // Update query state as the user types
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
