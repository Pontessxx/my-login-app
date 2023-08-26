import React from 'react';
import './Navbar.css';

function Navbar(props) {
  const handleButtonClick = () => {
    props.onClickButton(); ; // Chama a função passada como prop do componente pai
    //console.log('NAVBAR.js console log')
  };

  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="btnLogin-popup btn" onClick={handleButtonClick}>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
