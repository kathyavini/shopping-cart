import styled from 'styled-components';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { useState } from 'react';

// Not sure if I want this to be fixed width or not :)
// Probably I will want two sizes

const StyledCounter = styled(StyledTableRow)`
  border: 1px solid
    ${(props) => (props.border ? props.theme.main : 'transparent')};
  width: min-content;
`;

const StyledPara = styled.p`
  text-align: center;
  width: 3.5rem;
  font-weight: 400;
`;

const CounterButton = styled.button`
  font-family: ${(props) => props.theme.mainFont};
  background: ${(props) => (props.filled ? props.theme.main : 'transparent')};
  color: ${(props) => props.theme.main};
  border: none;

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 1.2rem;
  transition: background 200ms;

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

StyledCounter.defaultProps = {
  theme: {
    main: '#282c34',
    mainFont: 'helvetica, sans-serif',
  },
};

export function QuantityTool({ border }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <StyledCounter border={border ? true : false}>
      <CounterButton onClick={decrement}>−</CounterButton>
      <StyledPara>{quantity}</StyledPara>
      <CounterButton onClick={increment}>+</CounterButton>
    </StyledCounter>
  );
}
