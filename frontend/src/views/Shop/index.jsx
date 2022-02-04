import { useCallback, useContext } from 'react';

import { Layout } from '../../components/Shared/Layout';
import { FeaturedProduct } from '../../components/Shared/FeaturedProduct';
import { ProductsContext } from '../../contexts/products-context';

import './Shop.styles.scss';

export function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
}
