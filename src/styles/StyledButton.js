import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${(props) => props.theme.mainFont};
  background: ${(props) => (props.filled ? props.theme.main : 'transparent')};
  color: ${(props) => (props.filled ? props.theme.white : props.theme.main)};
  border: 1px solid ${(props) => props.theme.main};

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 2rem;

  &:hover {
    background: ${(props) =>
      props.filled ? props.theme.secondary : 'transparent'};
    color: ${(props) =>
      props.filled ? props.theme.white : props.theme.secondaryContrast};
    border: 1px solid
      ${(props) =>
        props.filled ? props.theme.secondary : props.theme.secondaryContrast};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

StyledButton.defaultProps = {
  theme: {
    main: 'palevioletred',
    secondary: 'salmon',
    secondaryContrast: 'tomato',
    white: 'white',
    mainFont: 'helvetica, sans-serif',
  },
};
