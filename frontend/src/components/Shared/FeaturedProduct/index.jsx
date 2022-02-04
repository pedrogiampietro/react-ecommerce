import { useHistory } from 'react-router-dom';
import './FeaturedProduct.styles.scss';

export function FeaturedProduct({ title, price, imageUrl, id }) {
  const history = useHistory();

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="Product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">Add To Cart</button>
      </div>
    </div>
  );
}
