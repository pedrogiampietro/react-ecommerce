import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import shoppingBag from '../../assets/shopping-bag.png';
import './CartIcon.styles.scss';

export function CartIcon() {
  const { itemCount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="Shopping-cart-icon" />
      {itemCount > 0 && <span className="cart-count"> {itemCount} </span>}
    </div>
  );
}
