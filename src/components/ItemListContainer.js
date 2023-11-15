import React from 'react';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Producto 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Producto 3',
    image: 'https://via.placeholder.com/150',
  },
];

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
