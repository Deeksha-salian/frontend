// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY4ahF5GlZ8Fm0pMlgjJGvFMiK6Tisxw-anytn2UWsIKyvk4GSCmqHEa4aquRIjl1pzg&usqp=CAU.jpg" 
          alt="App Logo" 
          className="logo" 
        />
        <h1 className="app-name">Yummy</h1>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>

        <li className="navbar-dropdown">
          <button className="dropdown-button">Categories</button>
          <ul className="dropdown-menu">
            <li><Link to="/categories/breakfast">Breakfast</Link></li>
            <li><Link to="/categories/lunch">Lunch</Link></li>
            <li><Link to="/categories/dinner">Dinner</Link></li>
            <li><Link to="/categories/desserts">Desserts</Link></li>
          </ul>
        </li>
      </ul>

      <div className="navbar-actions">
        <div className="navbar-search">
          <input type="text" placeholder="Search recipes..." />
          <button><FaSearch /></button>
        </div>

        <Link to="/favorites" className="navbar-icon"><FaHeart /></Link>
        <Link to="/login" className="navbar-icon"><FaUserCircle /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
