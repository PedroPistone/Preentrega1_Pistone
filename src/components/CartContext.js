import React, { createContext, useContext, useReducer } from 'react';

// Definir acciones
const ADD_TO_CART = 'ADD_TO_CART';

// Función reductora
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // Otros casos de acciones según sea necesario
    default:
      return state;
  }
};

// Estado inicial
const initialState = {
  cartItems: [],
};

// Crear contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Acciones
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  // Otras acciones según sea necesario

  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Función de utilidad para acceder al contexto
export const useCart = () => {
  return useContext(CartContext);
};
