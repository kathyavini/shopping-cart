import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledTableRow } from '../styles/Table/StyledTableRow';

const StyledTextArea = styled(motion.textarea)`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.4rem;

  font-family: var(--mainFont);
`;

const StyledExpandable = styled(StyledTableRow)`
  padding: 3px;

  p {
    pointer-events: none;
  }

  p:first-child {
    text-transform: none;
  }

  &:hover {
    border: 1px dashed var(--main);
    padding: 2px;
  }
`;

export function ExpandableRow({ children }) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  return (
    <>
      <motion.div layout>
        <StyledExpandable layout="position" onClick={toggleExpanded}>
          {children}
          <p>{expanded ? '-' : '+'}</p>
        </StyledExpandable>
        {expanded && <StyledTextArea></StyledTextArea>}
      </motion.div>
    </>
  );
}
