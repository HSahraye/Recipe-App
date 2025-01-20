import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    const apiKey = 'a0a5882f12e54c69851690f5c9c63614'; // Replace with your actual API key
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />

      {loading && <p>Loading...</p>}

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <h3>{recipe.title}</h3>
              <a
                href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
            </div>
          ))
        ) : (
          <p>No recipes found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};

export default App;
