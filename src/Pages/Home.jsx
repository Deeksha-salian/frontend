import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "../Home.css";
import breakfastRecipes from "../Data/breakfastRecipes";
import lunchRecipes from "../Data/lunchRecipes";
import dinnerRecipes from "../Data/dinnerRecipes";
import dessertsRecipes from "../Data/dessertsRecipes";

const categories = [
  { name: "Breakfast", recipes: breakfastRecipes },
  { name: "Lunch", recipes: lunchRecipes },
  { name: "Dinner", recipes: dinnerRecipes },
  { name: "Desserts", recipes: dessertsRecipes },
];

const Home = () => {
  return (
    <div className="hero-section">
      <Container className="mt-4">
        {/* Hero Section with Carousel */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div className="hero-text">
              <h1 className="fw-bold">Discover & Share Amazing Recipes! 🍽️</h1>
              <p className="text-muted">
                Explore delicious recipes from around the world and share your own culinary creations.
              </p>
              <Button as={Link} to="/explore" variant="primary" className="mt-2">
                Explore Recipes
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&auto=format&fit=crop&q=60" alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60" alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=600&auto=format&fit=crop&q=60" alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Recipe Categories */}
        {categories.map((category) => (
          <section key={category.name} className="mb-5">
            <h2 className="text-center mb-4">{category.name} Recipes</h2>
            <Row>
              {category.recipes.map((recipe) => (
                <Col key={recipe.id} md={4} className="mb-4">
                  <Card className="shadow">
                    <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                    <Card.Body>
                      <Card.Title>{recipe.name}</Card.Title>
                      <Card.Text>{recipe.description}</Card.Text>
                      <Button as={Link} to={`/recipe/${recipe.id}`} variant="primary">
                        View Recipe
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        ))}
      </Container>
    </div>
  );
};

export default Home;