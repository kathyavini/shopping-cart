import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      flex: 1;
    }
  }
`;

Container.defaultProps = {
  theme: {
    breakpoint: '650px',
  },
};

export function CartSummary({ items, cart }) {
  const total = () => {
    let count = 0;
    cart.forEach((cartItem) => {
      const [targetItem] = items.filter((item) => item.id === cartItem.id);
      count += cartItem.qty * +targetItem.price;
    });
    return count.toFixed(2);
  };

  const remainShipping = () => {
    return 50 - +total();
  };

  return (
    <Container>
      {/* Left section after breakpoint */}
      <StyledStack gap="1rem">
        <ExpandableRow>
          <p>Leave a note with your order</p>
        </ExpandableRow>
        <StyledBadge>
          <p aria-label="free-shipping">
            {remainShipping() > 0
              ? `You are only $${remainShipping().toFixed(
                  2
                )} away from Free Domestic Shipping!`
              : 'Your order qualifies for Free Domestic Shipping!'}
          </p>
          {remainShipping() > 0 && <p>(Excludes International)</p>}
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
            <p>{remainShipping() > 0 ? 'Calculated at checkout' : 'FREE'}</p>
          </StyledTableRow>
          <StyledDivider />
          <StyledTableRow>
            <p>total</p>
            <h4 aria-label="cart-total">${total()} CAD</h4>
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
