import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from "./Pages/AddRecipe";
import RecipeDetails from "./Pages/RecipeDetails";



const App = () => {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = { name: "John Doe" };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavbarComponent isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
