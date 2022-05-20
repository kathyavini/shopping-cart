import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import { CartTitle } from '../components/CartTitle';
import { CartSummary } from '../components/CartSummary';
import { StyledButton } from '../styles/StyledButton';

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 3vw;
  max-width: 900px;
  width: 100%;
  flex-flow: column nowrap;
  gap: 4rem;
  align-items: center;
  text-align: center;
`;

const Message = styled.p`
  font-size: clamp(1.3rem, 0.9rem + 2vw, 2rem);
  padding: 4rem;
`;

export function Cart({ cart, setCart, items }) {
  const cartItems = cart.map((cartItem, index) => {
    const targetItem = items.filter((item) => item.id === cartItem.id);
    return (
      <CartItem
        quantity={cartItem.qty}
        targetItem={targetItem[0]}
        key={index}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  return (
    <Container>
      <CartTitle />
      {cart.length ? (
        <>
          {cartItems}
          <CartSummary />{' '}
        </>
      ) : (
        <>
          <Message>There are no items in your cart</Message>
          <Link to="/shop">
            <StyledButton>Shop for items</StyledButton>
          </Link>
        </>
      )}
    </Container>
  );
}
