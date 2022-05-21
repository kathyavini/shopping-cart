import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

// Just for shrinking nav bar on scroll
const FullHeightContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  position: ${(props) => (props.transparent ? 'absolute' : 'sticky')};
  top: ${(props) => (props.transparent ? '0' : '-4rem')};
  /* top: -3.5rem; */
  background-color: ${(props) =>
    props.transparent ? 'transparent' : props.theme.contrast};
  z-index: 10;
  /* transition: background-color 500ms ease-in; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
`;

const Container = styled.div`
  /* background-color: ${(props) =>
    props.transparent ? 'transparent' : props.theme.contrast}; */
  /* position: ${(props) => (props.transparent ? 'absolute' : 'sticky')}; */
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 0.9rem + 2vw, 3rem);
  font-family: ${(props) => props.theme.mainFont};
  padding-inline: clamp(0.8rem, 0.9rem + 2vw, 3rem);

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  a.active {
    color: ${(props) => props.theme.secondaryContrast};
  }
`;

const ShopTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: clamp(2rem, 1rem + 4vw, 4rem);
  flex: 2;
`;

const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: clamp(1.1rem, 1rem + 2vw, 3rem);
  flex: 1;
`;

const MainLinks = styled.h2`
  font-size: clamp(1.3rem, 0.9rem + 2vw, 2rem);
  text-transform: uppercase;
  font-weight: 300;
  min-width: max-content;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${(props) => props.theme.secondaryContrast};
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const Icon = styled.span`
  font-size: clamp(2rem, 1.5rem + 4vw, 3rem);
`;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.7rem, 0.5rem + 4vw, 1.5rem);
  height: clamp(0.8rem, 0.7rem + 4vw, 1.7rem);
  width: clamp(0.8rem, 0.7rem + 4vw, 1.7rem);
  background-color: ${(props) =>
    props.green ? props.theme.tertiaryContrast : props.theme.main};
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;

export function Navbar({ cart }) {
  let location = useLocation();

  // Just checking out what the useLocatio hook returns. It's a nice hook.
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  const itemCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    return count;
  };

  return (
    <FullHeightContainer transparent={location.pathname === '/'}>
      <Container transparent={location.pathname === '/'}>
        <ShopTitle>Chah</ShopTitle>
        <LinksContainer>
          <NavLink to="/">
            <MainLinks>Home</MainLinks>
          </NavLink>
          <NavLink to="/shop">
            <MainLinks>Shop</MainLinks>
          </NavLink>
          <NavLink to="/cart">
            <MainLinks>
              <Icon className="material-icons">shopping_cart</Icon>
              <Badge green={location.pathname === '/'}>
                <p>{itemCount()}</p>
              </Badge>
            </MainLinks>
          </NavLink>
        </LinksContainer>
      </Container>
    </FullHeightContainer>
  );
}
