import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar>
          <Link to="/">Brand</Link>
          <Link to="/category/electronica">Electrónica</Link>
          <Link to="/category/ropa">Ropa</Link>
          <Link to="/category/hogar-jardin">Hogar y Jardín</Link>
          <CartWidget />
        </Navbar>

        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a la Tienda" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting="Productos por Categoría" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
