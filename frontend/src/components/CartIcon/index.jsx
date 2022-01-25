import './CartIcon.styles.scss';
import shoppingBag from '../../assets/shopping-bag.png';

export function CartIcon() {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="Shopping-cart-icon" />
      <span className="cart-count"> 5 </span>
    </div>
  );
}
