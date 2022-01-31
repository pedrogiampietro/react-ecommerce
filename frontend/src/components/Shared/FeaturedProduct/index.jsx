import './FeaturedProduct.styles.scss';

export function FeaturedProduct(product) {
  const { title, price, imageUrl } = product;

  return (
    <div className="featured-product">
      <div className="featured-image">
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
