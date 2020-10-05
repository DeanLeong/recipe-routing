import React from "react";
import { useParams } from "react-router-dom";

function Recipe(props) {
  const params = useParams();

  const recipe = props.recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h3>{recipe.fields.title}</h3>
      <h4>{recipe.fields.ingredients}</h4>
      <h5>{recipe.fields.steps}</h5>
    </div>
  );
}

export default Recipe;
