import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  return (
    <div className="container mt-5">
      {product ? (
        <div className="card">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <Description description={product.description} />
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Stock: {product.stock} unidades</p>
            <ItemQuantitySelector />
            <AddItemButton />
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
