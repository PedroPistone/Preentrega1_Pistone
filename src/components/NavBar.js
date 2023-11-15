import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8d7da', borderBottom: '1px solid #d6d6d6' }}>
      <a className="navbar-brand" href="/">
        <span role="img" aria-label="shopping-cart">🛍️</span> Lo De Pedro
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/productos">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria/electronica">
              Electrónica
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria/ropa">
              Ropa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria/hogar-jardin">
              Hogar y Jardín
            </a>
          </li>
          <li className="nav-item">
            <CartWidget itemCount={3} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
