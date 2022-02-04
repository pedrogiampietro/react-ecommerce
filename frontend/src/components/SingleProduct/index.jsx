import { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/products-context';
import { Layout } from '../Shared/Layout';

import './SingleProduct.styles.scss';

export function SingleProduct({ match, history: { push } }) {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));

    if (!product) {
      return push('/shop');
    }

    setProduct(product);
  }, [id, products, products, push]);

  if (!product) return null;

  const { imageUrl, title, price, description } = product;

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="Product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              Add To Cart
            </button>

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              Proced to Checkout
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
