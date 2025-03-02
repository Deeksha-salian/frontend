// src/Pages/AddRecipe.jsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe added:", recipe);
  };

  return (
    <Container className="add-recipe-form">
      <h1>Add a New Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" name="name" value={recipe.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" value={recipe.image} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={recipe.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Separate ingredients with commas" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Instructions</Form.Label>
          <Form.Control as="textarea" name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="Step-by-step instructions" />
        </Form.Group>
        <Button variant="primary" type="submit">Add Recipe</Button>
      </Form>
    </Container>
  );
};

export default AddRecipe;