import React from 'react'
const menuItems = [
  { id: 1, category: 'starters', name: 'Garlic Bread', desc: 'Toasted bread with garlic butter', price: 3.99, img: 'garlic-bread.jpeg' },
  { id: 2, category: 'starters', name: 'Chicken Wings', desc: 'Spicy fried chicken wings', price: 5.99, img: 'chicken-wings.jpeg' },
  { id: 3, category: 'main-course', name: 'Margherita Pizza', desc: 'Classic pizza with tomato and cheese', price: 9.99, img: 'pizza.jpeg' },
  { id: 4, category: 'main-course', name: 'Butter Chicken with Rice', desc: 'Creamy curry served with rice', price: 11.99, img: 'butter-chicken.jpeg' },
  { id: 5, category: 'desserts', name: 'Chocolate Lava Cake', desc: 'Warm cake with molten chocolate', price: 4.99, img: 'chocolate-cake.jpeg' },
  { id: 6, category: 'desserts', name: 'Ice Cream Sundae', desc: 'Vanilla ice cream with toppings', price: 3.99, img: 'ice-cream.jpeg' },
  { id: 7, category: 'beverages', name: 'Fresh Lime Soda', desc: 'Refreshing lime drink', price: 2.99, img: 'lime-soda.jpeg' },
  { id: 8, category: 'beverages', name: 'Iced Coffee', desc: 'Chilled coffee with ice', price: 3.50, img: 'iced-coffee.jpeg' },
];

function Menu({ activeFilter, setActiveFilter, addToCart }) {
  const filteredItems = activeFilter === 'all' ? menuItems : menuItems.filter(item => item.category === activeFilter);

  return (
    <main>
      <section className="filter-bar">
        {['all', 'starters', 'main-course', 'desserts', 'beverages'].map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
            >
            {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </button>
        ))}
      </section>
      <section className="menu-container">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={`./images/${item.img}`}  alt={item.name}/>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span> ${item.price.toFixed(2)}    </span>
              <button className="add-btn" onClick={() => addToCart(item)}>Buy Now</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Menu