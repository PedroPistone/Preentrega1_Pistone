import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './api';

const ItemDetailContainer = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="card">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Stock: {product.stock} unidades</p>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
