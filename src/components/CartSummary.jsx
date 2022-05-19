import styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

import { StyledButton } from '../styles/StyledButton';
import { StyledBadge } from '../styles/StyledBadge';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { StyledStack } from '../styles/Layout/StyledStack';

import { ExpandableRow } from './ExpandableRow';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoint}) {
    flex-direction: row;
    column-gap: 2rem;

    > * {
      /* width: 50%; */
      flex: 1;
    }
  }
`;

Container.defaultProps = {
  theme: {
    breakpoint: '650px',
  },
};

const total = () => {
  return '12.50';
};

const remainShipping = () => {
  return '86.50';
};

export function CartSummary() {
  return (
    <Container>
      {/* Left section after breakpoint */}
      <StyledStack gap="1rem">
        <ExpandableRow>
          <p>Leave a note with your order</p>
        </ExpandableRow>
        <StyledBadge>
          <p>
            You are only ${remainShipping()} away from Free Domestic Shipping!
          </p>
          <p>(Excludes International)</p>
        </StyledBadge>
      </StyledStack>
      {/* Right section after breakpoint */}
      <StyledStack gap="2rem">
        <StyledStack gap="1rem">
          <StyledTableRow>
            <p>subtotal</p>
            <p>${total()} </p>
          </StyledTableRow>
          <StyledTableRow>
            <p>tax</p>
            <p>Calculated at checkout</p>
          </StyledTableRow>
          <StyledTableRow>
            <p>shipping</p>
            <p>Calculated at checkout</p>
          </StyledTableRow>
          <StyledDivider />
          <StyledTableRow>
            <p>total</p>
            <h4>${total()} CAD</h4>
          </StyledTableRow>
        </StyledStack>
        <StyledStack gap="0.5rem">
          <Link to="/shop">
            <StyledButton style={{ width: '100%' }}>
              Continue Shopping
            </StyledButton>
          </Link>
          <StyledButton filled>CheckOut</StyledButton>
        </StyledStack>
      </StyledStack>
    </Container>
  );
}
