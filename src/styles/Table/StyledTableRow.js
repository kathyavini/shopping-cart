import styled from 'styled-components';
import { StyledRow } from '../Layout/StyledRow';

export const StyledTableRow = styled(StyledRow)`
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 300;
  color: ${(props) => props.theme.main};

  p:first-child {
    text-transform: uppercase;
  }
`;

StyledTableRow.defaultProps = {
  theme: {
    main: '#282c34',
    mainFont: 'helvetica, sans-serif',
  },
};
