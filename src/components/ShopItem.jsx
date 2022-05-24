import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledAnimatedButton } from '../styles/StyledButton';
import { StyledDivider } from '../styles/Table/StyledDivider';
import { StyledStack } from '../styles/Layout/StyledStack';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.secondaryFont};
  padding: clamp(0.5rem, 4vw, 2.5rem);
  transition: all 100ms;
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

export function ShopItem({ item, handleClick, cart }) {
  const [imgAlt, setImgAlt] = useState(true);

  // These are for is for conditionally rendering an "Added to cart" button, but I'm not going to use this for the moment since it means the click animation doesn't display on mobile
  const [inCart, setInCart] = useState(false);
  // let location = useLocation();

  // Only after nagivating away from the page
  // useEffect(() => {
  //   checkCartStatus();
  // }, [location]);

  function checkCartStatus() {
    const targetItem = cart.filter((cartItem) => cartItem.id === item.id);
    targetItem.length ? setInCart(true) : setInCart(false);
  }

  return (
    <Container>
      <StyledStack
        gap="0.7rem"
        center
        onMouseEnter={() => setImgAlt(false)}
        onMouseLeave={() => setImgAlt(true)}
      >
        <StyledImage src={imgAlt ? item.imageAlt : item.image} />
        <Title>{item.name}</Title>
        <Subtitle>{item.description}</Subtitle>
        <StyledDivider width="2rem" margin=".5rem" />
        <Price>${item.price} CAD</Price>
        {/* {inCart ? (
          <StyledButton filled>Added to Cart</StyledButton>
        ) : ( */}
        <StyledAnimatedButton
          // transitioned={inCart ? true : false}
          onClick={handleClick}
        >
          Add to Cart
          {/* {inCart ? 'Added to cart' : 'Add to Cart'} */}
        </StyledAnimatedButton>
        {/* )} */}
      </StyledStack>
    </Container>
  );
}
