import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaBookmark } from 'react-icons/fa';
import breakfastRecipes from '../Data/breakfastRecipes';
import lunchRecipes from '../Data/lunchRecipes';
import dinnerRecipes from "../Data/dinnerRecipes";
import dessertsRecipes from "../Data/dessertsRecipes";

import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();

  // Combine both breakfast and lunch recipes into one array
  const allRecipes = [...breakfastRecipes, ...lunchRecipes, ...dinnerRecipes, ...dessertsRecipes];

  // Find the recipe by ID
  const recipe = allRecipes.find((recipe) => recipe.id.toString() === id);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-container">
      {/* Left side: Recipe Image */}
      <div className="recipe-image-container">
        <img src={recipe.image || ""} alt={recipe.name || "Recipe"} className="recipe-image" />
      </div>

      {/* Right side: Ingredients and Instructions */}
      <div className="recipe-details">
        <h1>{recipe.name || "Unknown Recipe"}</h1>
        <p>{recipe.description || "No description available."}</p>

        <div className="recipe-info">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients?.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions?.length > 0 ? (
                recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              ) : (
                <li>No instructions available.</li>
              )}
            </ol>
          </div>
        </div>

        <div className="recipe-actions">
          <button 
            className={liked ? "liked" : ""} 
            onClick={() => setLiked(!liked)}
          >
            <FaHeart /> {liked ? "Liked" : "Like"}
          </button>

          <button 
            className={saved ? "saved" : ""} 
            onClick={() => setSaved(!saved)}
          >
            <FaBookmark /> {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
