import styled from 'styled-components';
import { StyledTableRow } from '../styles/Table/StyledTableRow';

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

  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 1.2rem;
  transition: background 200ms;

  @media (pointer: fine) {
    font-size: 1rem;
    &:hover {
      background: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.white};
    }

    &:active {
      filter: brightness(1.1);
    }
  }
`;

StyledCounter.defaultProps = {
  theme: {
    main: '#282c34',
    mainFont: 'helvetica, sans-serif',
  },
};

// Consider using an aria-label with a word or even a font icon which would have the name of the icon (add, remove) instead of + / -
export function QuantityTool({ border, increment, decrement, quantity }) {
  return (
    <StyledCounter border={border ? true : false}>
      <CounterButton onClick={decrement}>−</CounterButton>
      <StyledPara aria-label="quantity">{quantity}</StyledPara>
      <CounterButton onClick={increment}>+</CounterButton>
    </StyledCounter>
  );
}
