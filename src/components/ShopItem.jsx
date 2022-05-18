import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledAnimatedButton } from '../styles/StyledButton';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { StyledStack } from '../styles/Layout/StyledStack';
import { StyledRow } from '../styles/Layout/StyledRow';
import matcha from '../assets/matcha.jpg';

const Container = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.secondaryFont};
  /* padding: 2.5rem; */
  padding: clamp(0.5rem, 4vw, 2.5rem);
  transition: all 100ms;

  &:hover {
    /* background-color: ${(props) => props.theme.white};
    box-shadow: 1.1rem 1rem 0.2rem 0.2rem
      ${(props) => props.theme.secondaryContrast}; */
  }
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 3px;

  @media (min-width: ${(props) => props.theme.breakpointM}) {
    width: 250px;
    height: 250px;
  }
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Subtitle = styled.h3`
  font-weight: 300;
  margin-top: -0.5rem;
`;

const Price = styled.p`
  font-family: ${(props) => props.theme.mainFont};
`;

export function ShopItem() {
  const price = '12.50';

  return (
    <Container>
      <StyledStack gap="0.7rem" center>
        <StyledImage src={matcha} />
        <Title>Matcha Tea</Title>
        <Subtitle>Simply delicious</Subtitle>
        <StyledDivider width="2rem" margin=".5rem" />
        <Price>${price} CAD</Price>
        <StyledAnimatedButton>Add to Cart</StyledAnimatedButton>
      </StyledStack>
    </Container>
  );
}
