// import { Link, NavLink } from 'react-router-dom';
import { StyledNavLink } from '../styles/StyledNavLink';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>Navbar Logo</li>
        <StyledNavLink to="/home">
          <li>Home</li>
        </StyledNavLink>
        <StyledNavLink to="/shop">
          <li>Shop</li>
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <li>Cart</li>
        </StyledNavLink>
      </ul>
    </nav>
  );
}
