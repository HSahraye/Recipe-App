import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State to manage user input

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query); // Call the onSearch function passed from App
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state as the user types
        placeholder="Search for a recipe..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
