import React from 'react';
import './Recipy.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Calories: {calories}</p>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;