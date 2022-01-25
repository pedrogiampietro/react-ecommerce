import { Link } from 'react-router-dom';
import { CartIcon } from '../CartIcon';
import './Header.styles.scss';

export function Header() {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">Nomad</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </nav>
  );
}
