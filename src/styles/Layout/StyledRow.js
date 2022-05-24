import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledRow = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  // Make a consistent interface with StyledStack
  justify-content: ${(props) => props.justify || 'space-between'};
  column-gap: ${(props) => props.gap || '0px'};
  align-items: center;
  // Really I'd like the font declarations to go elsewhere like higher up :)
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 300;
  color: ${(props) => props.theme.main};
`;

StyledRow.defaultProps = {
  theme: {
    main: '#282c34',
    mainFont: 'helvetica, sans-serif',
  },
};
