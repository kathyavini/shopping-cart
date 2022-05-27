import styled from 'styled-components';

export const StyledDivider = styled.div`
  border-top: 1px solid var(--main);
  margin-block: ${(props) => props.margin || '.7rem'};
  width: ${(props) => props.width || '100%'};
`;
