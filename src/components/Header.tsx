import React from 'react';
import './Header.css'; // Make sure you'll create this CSS file next

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">Happy Helpings</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Menu</a></li>
          <li><a href="/specials">Specials</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
