import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="app">
      <Header />
      <Menu activeFilter={activeFilter} setActiveFilter={setActiveFilter} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;