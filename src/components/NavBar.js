import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8d7da', borderBottom: '1px solid #d6d6d6' }}>
      <a className="navbar-brand" href="/">
        <span role="img" aria-label="shopping-cart">🛍️</span> Lo De Pedro
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/electronica">
              Electrónica
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/ropa">
              Ropa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/hogar-jardin">
              Hogar y Jardín
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget itemCount={3} />
    </nav>
  );
};

export default Navbar;
