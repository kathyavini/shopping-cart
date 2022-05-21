import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/StyledButton';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bgImg[1]});
  background-size: cover;
  /* background-position: bottom center; */
  background-position-y: 25%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpointM}) {
    background-image: url(${(props) => props.bgImg[0]});
  }
`;

const HomeTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: 6rem;
  margin-top: -10vh;
  /* margin-left: -30vw; */
`;

const backgroundImages = [
  'https://source.unsplash.com/Tp1yIvG7aBw/',
  'https://source.unsplash.com/E0_DOo06c8U/',
];

// function pickOne() {
//   return Math.floor(Math.random() * backgroundImages.length);
// }

// Leaves and cup
// const imgSource = 'https://source.unsplash.com/Qaor6nxikUM';

// Copper cups
// const imgSource = 'https://source.unsplash.com/Tp1yIvG7aBw/';

// Elegant dark cup
// const imgSource = 'https://source.unsplash.com/E0_DOo06c8U/';

export function Home() {
  return (
    <Container bgImg={backgroundImages}>
      <HomeTitle>Chah</HomeTitle>
      <Link to="/shop">
        <StyledButton filled>Shop Now</StyledButton>
      </Link>
    </Container>
  );
}
