import styled from 'styled-components';

export const StyledDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.main};
  margin-block: ${(props) => props.margin || '.7rem'};
  width: ${(props) => props.width || '100%'};
`;

StyledDivider.defaultProps = {
  theme: {
    main: '#282c34',
  },
};
