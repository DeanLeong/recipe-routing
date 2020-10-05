import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      ingredients,
      steps,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/recipes`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Ingredients</label>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <label htmlFor="">Steps</label>
      <input
        type="text"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <button type="submit">EGGO</button>
    </form>
  );
}

export default Form;
