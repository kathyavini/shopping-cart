import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { StyledStack } from '../styles/Layout/StyledStack';
import { StyledRow } from '../styles/Layout/StyledRow';
import { QuantityTool } from './QuantityTool';
import matcha from '../assets/matcha.jpg';

const Container = styled.div`
  h4 {
    font-weight: 400;
  }
`;

const StyledThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;

  @media (min-width: ${(props) => props.theme.breakpointM}) {
    width: 125px;
    height: 125px;
  }
`;

const StyledInfo = styled(StyledStack)`
  max-width: 30%;
  text-align: center;
`;

const StyledIconContainer = styled.div`
  height: 120px;
  width: 4rem;
  padding: 0.7rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: flex-end;
  font-size: 1.1rem;
`;

function BriefInfo() {
  return (
    <StyledInfo center>
      <h4>Matcha Tea</h4>
      <p>A delicious healthy treat</p>
    </StyledInfo>
  );
}

export function CartItem() {
  const total = '12.50';
  return (
    <Container>
      <StyledRow justify="space-around">
        <StyledThumbnail src={matcha} />
        <BriefInfo />
        <StyledIconContainer>
          <p>✕</p>
        </StyledIconContainer>
      </StyledRow>
      <StyledRow justify="space-evenly" gap="2rem">
        <QuantityTool />
        <p>Item Total: ${total}</p>
      </StyledRow>
      <StyledDivider />
    </Container>
  );
}
