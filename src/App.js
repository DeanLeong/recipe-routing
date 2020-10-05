import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Form from "./Form";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/recipes`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setRecipes(response.data.records);
    };
    getRecipes();
  }, []);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">Create New Recipe</Link>
      </nav>
      <Route exact path="/">
        <div>
          {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`}>{recipe.fields.title}</Link>
          ))}
        </div>
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Route path="/recipe/:id">
        <Recipe recipes={recipes} />
      </Route>
    </div>
  );
}

export default App;
