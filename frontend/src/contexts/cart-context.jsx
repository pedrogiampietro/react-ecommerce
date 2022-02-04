import { createContext, useReducer } from 'react';

import { cartReducer } from './cart-reducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const contextValues = {
    ...state,
  };

  return (
    <CartContext.Provider value={{ contextValues }}>
      {children}
    </CartContext.Provider>
  );
}
