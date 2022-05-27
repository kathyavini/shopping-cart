import styled from 'styled-components';
import { StyledTableRow } from '../styles/Table/StyledTableRow';

const StyledCounter = styled(StyledTableRow)`
  border: 1px solid ${(props) => (props.border ? 'var(--main)' : 'transparent')};
  width: min-content;
`;

const StyledPara = styled.p`
  text-align: center;
  width: 3.5rem;
  font-weight: 400;
`;

const CounterButton = styled.button`
  font-family: var(--mainFont);
  background: transparent;
  color: var(--main);
  border: none;

  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 1.2rem;
  transition: background 200ms;

  @media (pointer: fine) {
    font-size: 1rem;
    &:hover {
      background: var(--secondary);
      color: var(--white);
    }

    &:active {
      filter: brightness(1.1);
    }
  }
`;

export function QuantityTool({ border, increment, decrement, quantity }) {
  return (
    // For the $prop syntax see https://styled-components.com/docs/api#transient-props
    <StyledCounter $border={border ? true : false}>
      <CounterButton onClick={decrement}>−</CounterButton>
      <StyledPara aria-label="quantity">{quantity}</StyledPara>
      <CounterButton onClick={increment}>+</CounterButton>
    </StyledCounter>
  );
}
