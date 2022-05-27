import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/StyledButton';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bgimg[1]});
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpointM || '850px'}) {
    background-image: url(${(props) => props.bgimg[0]});
    background-position-y: 25%;
  }
`;

const HomeTitle = styled.h1`
  color: var(--white);
  font-family: var(--secondaryFont);
  font-size: 6rem;
  margin-top: -10vh;
`;

const backgroundImages = [
  require('../assets/background-copper.jpg'),
  require('../assets/background-black.jpg'),
];

export function Home() {
  return (
    <Container bgimg={backgroundImages}>
      <HomeTitle>Chah</HomeTitle>
      <Link to="/shop">
        <StyledButton filled>Shop Now</StyledButton>
      </Link>
    </Container>
  );
}
