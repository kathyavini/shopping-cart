import { useState } from 'react';
import {
  StyledExpandable,
  StyledTextArea,
} from '../styles/Table/StyledExpandable';
import { motion } from 'framer-motion';

export function ExpandableRow({ children }) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  return (
    <>
      <motion.div layout>
        <StyledExpandable layout onClick={toggleExpanded}>
          {children}
          <p>{expanded ? '-' : '+'}</p>
        </StyledExpandable>
        {expanded && <StyledTextArea></StyledTextArea>}
      </motion.div>
    </>
  );
}
