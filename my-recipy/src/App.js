import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';
import { FaSearch, FaHome } from 'react-icons/fa';

const App = () => {
  const APP_ID = '9a4ee262';
  const APP_KEY = 'fd43c46f7708dae086275b06c47e17c1';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chickoo shake");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Recipe Finder</h1>
          <FaHome size={30} />
        </div>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search for a recipe"
          />
          <button className="search-button" type="submit">
            <FaSearch size={20} />
            Search
          </button>
        </form>
      </nav>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;