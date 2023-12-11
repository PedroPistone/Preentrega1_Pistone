// ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getProducts } from './api';

const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams();
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      let data;

      if (categoryId) {
        data = await getProducts(categoryId);
      } else {
        data = await getProducts();
      }

      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log('Categoría ID:', categoryId);
    console.log('Ruta actual:', pathname);
  }, [categoryId, pathname]);

  useEffect(() => {
    console.log('Ruta actual actualizada:', pathname);
  }, [pathname]);

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
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
