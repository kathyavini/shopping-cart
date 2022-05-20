import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { StyledStack } from '../styles/Layout/StyledStack';
import { StyledRow } from '../styles/Layout/StyledRow';
import { QuantityTool } from './QuantityTool';

const Container = styled.div`
  h4 {
    font-weight: 400;
  }
`;

const StyledThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;

  @media (min-width: ${(props) => props.theme.breakpointM}) {
    width: 125px;
    height: 125px;
  }
`;

const StyledInfo = styled(StyledStack)`
  max-width: 30%;
  text-align: center;
`;

const StyledIconContainer = styled.div`
  height: 120px;
  width: 4rem;
  padding: 0.7rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: flex-end;
  font-size: 1.1rem;

  span {
    padding: 0.3rem 0.5rem;
    transition: background-color 200ms;
  }

  span:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.secondaryContrast};
  }

  span:active {
    filter: brightness(1.1);
  }
`;

export function CartItem({ quantity, targetItem, cart, setCart }) {
  const total = () => {
    const itemTotal = +targetItem.price * quantity;
    return itemTotal.toFixed(2);
  };

  function increment(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        item.qty += 1;
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decrement(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        item.qty -= 1;
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item.qty > 0);

    setCart(filteredCart);
  }

  function deleteItem(id) {
    const filteredCart = cart.filter((item) => item.id !== id);

    setCart(filteredCart);
  }

  return (
    <Container>
      <StyledRow justify="space-around">
        <StyledThumbnail src={targetItem.image} />
        <StyledInfo center>
          <h4>{targetItem.name}</h4>
          <p>{targetItem.description}</p>
        </StyledInfo>
        <StyledIconContainer>
          <span aria-label="close" onClick={() => deleteItem(targetItem.id)}>
            ✕
          </span>
        </StyledIconContainer>
      </StyledRow>
      <StyledRow justify="end" gap="5rem">
        <QuantityTool
          increment={() => increment(targetItem.id)}
          decrement={() => decrement(targetItem.id)}
          quantity={quantity}
        />
        <p aria-label="item-total">${total()} CAD</p>
      </StyledRow>
      <StyledDivider />
    </Container>
  );
}
