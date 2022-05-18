import styled from 'styled-components';

import { CartItem } from '../components/CartItem';
import { CartTitle } from '../components/CartTitle';
import { CartSummary } from '../components/CartSummary';

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 3vw;
  max-width: 900px;
`;

export function Cart() {
  return (
    <Container>
      <CartTitle />
      <CartItem />
      <CartItem />
      <CartSummary />
    </Container>
  );
}
