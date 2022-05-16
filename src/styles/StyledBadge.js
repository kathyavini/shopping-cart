import styled from 'styled-components';

export const StyledBadge = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  background: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.white};

  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.5rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  row-gap: ${(props) => props.gap || '0.7rem'};
`;

StyledBadge.defaultProps = {
  theme: {
    contrast: 'papayawhip',
    white: 'palevioletred',
    mainFont: 'helvetica, sans-serif',
  },
};
