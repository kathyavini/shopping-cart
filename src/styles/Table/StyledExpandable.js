import styled from 'styled-components';
import { StyledTableRow } from './StyledTableRow';
import { motion } from 'framer-motion';

export const StyledTextArea = styled(motion.textarea)`
  width: 100%;
  margin-top: 0.5rem;
  font-family: ${(props) => props.theme.mainFont};
  padding: 0.4rem;
`;

StyledTextArea.defaultProps = {
  theme: {
    mainFont: 'helvetica, sans-serif',
  },
};

export const StyledExpandable = styled(StyledTableRow)`
  padding: 3px;

  p {
    pointer-events: none;
  }

  p:first-child {
    text-transform: none;
  }

  &:hover {
    border: 1px dashed ${(props) => props.theme.main};
    padding: 2px;
  }
`;

StyledExpandable.defaultProps = {
  theme: {
    main: '#282c34',
  },
};
