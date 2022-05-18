import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { StyledButton } from '../styles/StyledButton';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const HomeTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: 6rem;
  margin-top: -10vh;
  /* margin-left: -30vw; */
`;

// Leaves and cup
const imgSource = 'https://source.unsplash.com/Qaor6nxikUM';

// Tea kettle
// const imgSource = 'https://source.unsplash.com/Tp1yIvG7aBw/';

export function Home() {
  return (
    <Container bgImg={imgSource}>
      <HomeTitle>Chah</HomeTitle>
      <Link to="/shop">
        <StyledButton filled>Shop Now</StyledButton>
      </Link>
    </Container>
  );
}
