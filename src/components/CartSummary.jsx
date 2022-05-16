import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';
import { StyledBadge } from '../styles/StyledBadge';

const StyledStack = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${(props) => props.gap || '10px'};
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 300;
  color: ${(props) => props.theme.main};

  p:first-child {
    text-transform: uppercase;
  }
`;

const StyledDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.main};
  margin-bottom: 5px;
`;

StyledRow.defaultProps = {
  theme: {
    main: '#282c34',
    mainFont: 'helvetica, sans-serif',
  },
};

StyledDivider.defaultProps = {
  theme: {
    main: '#282c34',
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
    <div>
      <StyledStack gap="2rem">
        <StyledBadge>
          <p>
            You are only ${remainShipping()} away from Free Domestic Shipping!
          </p>
          <p>(Excludes International)</p>
        </StyledBadge>
        <StyledStack gap="1rem">
          <StyledRow>
            <p>total</p>
            <p>${total()} </p>
          </StyledRow>
          <StyledRow>
            <p>tax</p>
            <p>Calculated at checkout</p>
          </StyledRow>
          <StyledRow>
            <p>shipping</p>
            <p>Calculated at checkout</p>
          </StyledRow>
          <StyledDivider />
          <StyledRow>
            {' '}
            <p>total</p>
            <p>${total()} </p>
          </StyledRow>
        </StyledStack>
        <StyledStack gap="0.5rem">
          <StyledButton>View Cart</StyledButton>
          <StyledButton filled>CheckOut</StyledButton>
        </StyledStack>
      </StyledStack>
    </div>
  );
}
