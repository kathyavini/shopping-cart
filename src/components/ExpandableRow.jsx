import { useState } from 'react';
import {
  StyledExpandable,
  StyledTextArea,
} from '../styles/Table/StyledExpandable';

export function ExpandableRow({ children }) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  return (
    <>
      <StyledExpandable onClick={toggleExpanded}>
        {children}
        <p>{expanded ? '-' : '+'}</p>
      </StyledExpandable>
      {expanded && <StyledTextArea></StyledTextArea>}
    </>
  );
}
