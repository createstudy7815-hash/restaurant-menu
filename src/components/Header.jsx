import React from 'react'
function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Andhra Chilli Restaurant</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header