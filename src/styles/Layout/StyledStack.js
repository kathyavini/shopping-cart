import styled from 'styled-components';

export const StyledStack = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${(props) => props.gap || '10px'};
  // This should be remade to be consistent with StyledRow
  align-items: ${(props) => (props.center ? 'center' : 'stretch')};
`;
