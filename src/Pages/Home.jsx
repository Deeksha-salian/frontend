import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Home.css";
import breakfastRecipes from "../Data/breakfastRecipes";
import lunchRecipes from "../Data/lunchRecipes";
import dinnerRecipes from "../Data/dinnerRecipes";
import dessertsRecipes from "../Data/dessertsRecipes";

const categories = [
  { name: "Breakfast", id: "breakfast", recipes: breakfastRecipes },
  { name: "Lunch", id: "lunch", recipes: lunchRecipes },
  { name: "Dinner", id: "dinner", recipes: dinnerRecipes },
  { name: "Desserts", id: "desserts", recipes: dessertsRecipes },
];

const Home = () => {
  return (
    <div className="hero-section">
      <Container className="mt-4">
        {/* Hero Section with Carousel */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D.jpg"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D.jpg"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxmb29kfGVufDB8fDB8fHww.jpg"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Hero Text */}
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
          <Col md={6}></Col>
        </Row>

        {/* Recipe Categories */}
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-5">
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