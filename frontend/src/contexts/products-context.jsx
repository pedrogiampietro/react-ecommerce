import { createContext, useState } from 'react';

import SHOP_DATA from '../shop_data';

export const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
