import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledTableRow } from '../styles/Table/StyledTableRow';
import { StyledStack } from '../styles/Layout/StyledStack';
import { StyledRow } from '../styles/Layout/StyledRow';
import { QuantityTool } from './QuantityTool';

const StyledTitleRow = styled(StyledRow)`
  max-width: 100%;
  padding: 1rem;

  * {
    flex: 1;
  }

  h1 {
    text-align: center;
    font-family: ${(props) => props.theme.secondaryFont};
    font-size: 2.8rem;
  }

  h2 {
    text-align: right;
    font-weight: 300;
    font-size: 1.2rem;
    padding: 0;
  }
`;

const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.main};

  span:nth-child(2) {
    display: none;
  }

  &:active {
    color: ${(props) => props.theme.secondaryContrast};
  }

  @media (min-width: ${(props) => props.theme.breakpointM}) {
    span:nth-child(2) {
      display: inline-block;
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      padding-left: 1rem;
    }
  }
`;

const Icon = styled.span`
  font-size: clamp(1.5rem, 1rem + 4vw, 2.5rem);
  flex: 0;
`;

export function CartTitle() {
  const items = 3;

  return (
    <>
      <StyledTitleRow>
        <BackContainer to="/shop">
          <Icon className="material-icons">arrow_back</Icon>
          <span>Continue shopping</span>
        </BackContainer>
        <h1>Cart</h1>
        <h2>{items} ITEM(S)</h2>
      </StyledTitleRow>
      <StyledDivider />
    </>
  );
}