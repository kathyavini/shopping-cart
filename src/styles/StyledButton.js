import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 1px solid var(--main);
  padding: 0.7rem 2rem;

  font-family: var(--mainFont);
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  background: ${(props) => (props.filled ? 'var(--main)' : 'transparent')};
  color: ${(props) => (props.filled ? 'var(--white)' : 'var(--main)')};

  position: relative;
  z-index: 10;

  &:hover {
    background: ${(props) =>
      props.filled ? 'var(--secondary)' : 'transparent'};
    color: ${(props) =>
      props.filled ? 'var(--white)' : 'var(--tertiaryContrast)'};
    border: 1px solid
      ${(props) =>
        props.filled ? 'var(--secondary)' : 'var(--tertiaryContrast)'};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

export const StyledAnimatedButton = styled.button`
  position: relative;

  background: transparent;
  padding: 0.7rem 2rem;
  border: 1px solid var(--main);

  color: var(--main);
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  z-index: 1;

  &:hover {
    color: var(--secondaryContrast);
    border: 1px solid var(--secondaryContrast);
  }

  &:after {
    content: '';
    background-color: var(--main);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    z-index: -1;
    transition: transform 0ms;
  }

  &:hover:after {
    transform: scaleX(1);
    transition: transform 200ms ease-in-out;
  }

  &:active {
    filter: brightness(1.2);
  }
`;
