import React from 'react';

const AddItemButton = () => {
  const handleClick = () => {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito');
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;
