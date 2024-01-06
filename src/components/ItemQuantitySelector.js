import React from 'react';

const ItemQuantitySelector = () => {
  return (
    <div>
      <label>Cantidad:</label>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        {/* Agrega más opciones según el stock del producto */}
      </select>
    </div>
  );
};

export default ItemQuantitySelector;
