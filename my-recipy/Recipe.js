import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <p>{recipe.recipe.source}</p>
    </div>
  );
};

export default Recipe;