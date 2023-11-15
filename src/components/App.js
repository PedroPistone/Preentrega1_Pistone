import React from 'react';
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Nuestra Tienda!" />
    </div>
  );
};

export default App;
