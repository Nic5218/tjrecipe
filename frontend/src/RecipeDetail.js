// src/components/RecipeDetail.js
import React from 'react';

const RecipeDetail = ({ match }) => {
  const { id } = match.params;
  const recipe = { id, name: 'Spaghetti Bolognese', ingredients: ['pasta', 'meat', 'tomato sauce'] };

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
