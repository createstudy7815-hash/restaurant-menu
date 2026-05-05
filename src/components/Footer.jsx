import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@tastybites.com</p>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>123 Food Street, Flavor City, FC 12345</p>
        </div>
        <div className="social">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </div>
      <p>&copy; 2023 Tasty Bites. All rights reserved.</p>
    </footer>
  );
}

export default Footer