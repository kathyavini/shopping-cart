import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledDivider } from '../styles/Table/StyledDivider';

const StyledTitleRow = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  font-family: var(--mainFont);
  font-weight: 300;
  color: var(--main);

  max-width: 100%;
  padding: 1rem;

  * {
    flex: 1;
  }

  h1 {
    text-align: center;
    font-family: var(--secondaryFont);
    font-size: 2.8rem;
  }

  h2 {
    text-align: right;
    font-weight: 300;
    font-size: 1.2rem;
    padding: 0;
  }
`;

const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  color: var(--main);

  span:nth-child(2) {
    display: none;
  }

  &:active {
    color: var(--secondaryContrast);
  }

  @media (min-width: ${(props) => props.theme.breakpointM || '850px'}) {
    span:nth-child(2) {
      display: inline-block;
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      padding-left: 1rem;
    }
  }
`;

const Icon = styled.span`
  font-size: clamp(1.5rem, 1rem + 4vw, 2.5rem);
  flex: 0;
`;

export function CartTitle({ cart }) {
  const itemCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    return count;
  };

  return (
    <>
      <StyledTitleRow>
        <BackContainer to="/shop">
          <Icon className="material-icons">arrow_back</Icon>
          <span>Continue shopping</span>
        </BackContainer>
        <h1>Cart</h1>
        <h2 aria-label="item-count">{itemCount()} ITEM(S)</h2>
      </StyledTitleRow>
      <StyledDivider />
    </>
  );
}
