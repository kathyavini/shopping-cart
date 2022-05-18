import styled from 'styled-components';
import { ShopItem } from '../components/ShopItem';

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  text-align: center;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  max-width: 1650px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: clamp(0.5rem, 4vw, 4rem);
  row-gap: clamp(1.7rem, 1.5rem + 4vw, 5rem);
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: clamp(2rem, 1.5rem + 4v, 3rem);
  margin-block: 2rem;
`;

export function Shop() {
  return (
    <Container>
      <Title>Our Teas</Title>
      <Content>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </Content>
    </Container>
  );
}
