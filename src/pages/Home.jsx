import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/StyledButton';

import copper from '../assets/background-copper.jpg';
import copperLow from '../assets/background-copper_lowres.jpg';

import black from '../assets/background-black.jpg';
import blackLow from '../assets/background-black_lowres.jpg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0c0c0b;
  background-image: url(${blackLow});
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpointM || '850px'}) {
    background-color: #291e1b;
    background-image: url(${copper}), url(${copperLow});
    background-position-y: 25%;
  }
`;

// Using a div to do the media query in CSS
const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-image: url(${black});
  background-size: cover;

  @media (min-width: ${(props) => props.theme.breakpointM || '850px'}) {
    background-image: url(${copper});
    background-position-y: 25%;
  }
`;

const HomeTitle = styled.h1`
  color: var(--white);
  font-family: var(--secondaryFont);
  font-size: 6rem;
  margin-top: -10vh;
  z-index: 1;
`;

export function Home() {
  return (
    <Container>
      <BackgroundImage />
      <HomeTitle>Chah</HomeTitle>
      <Link to="/shop">
        <StyledButton filled>Shop Now</StyledButton>
      </Link>
    </Container>
  );
}
