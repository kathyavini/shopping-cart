import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// Wait what? Will this still work with NavLink?
// I think this example from the docs should be updated because it breaks react-router-dom functionality
// const Link = ({ className, children }) => (
//   <a className={className}>{children}</a>
// );

export const StyledNavLink = styled(NavLink)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: salmon;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  color: tomato;
  font-weight: bold;
`;
