// src/Navbar.js
import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="btnLogin-popup btn">Login</button>
      </nav>
    </header>
  );
}

export default Navbar;