import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTableRow = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-family: var(--mainFont);
  font-weight: 300;
  color: var(--main);

  justify-content: ${(props) => props.justify || 'space-between'};
  column-gap: ${(props) => props.gap || '0px'};

  p:first-child {
    text-transform: uppercase;
  }
`;
