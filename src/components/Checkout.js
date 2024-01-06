import React from 'react';

const Brief = ({ cartItems }) => {
  return (
    <div>
      <h2>Resumen de la compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default Brief;
