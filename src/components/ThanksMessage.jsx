import styled from 'styled-components';
import { StyledStack } from '../styles/Layout/StyledStack';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  width: 100vw;
  height: 90vh;
  z-index: 20;
  transition: opacity 1s;
  opacity: 0;

  &.visible {
    opacity: 1;
  }
`;

const Message = styled(StyledStack)`
  font-family: ${(props) => props.theme.secondaryFont};
  width: clamp(300px, 70vw, 500px);
  font-size: clamp(1.3rem, 0.9rem + 2vw, 2rem);
  background-color: ${(props) => props.theme.background};
  line-height: 2rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2rem;
  border-radius: 3px;

  a {
    color: ${(props) => props.theme.tertiaryContrast};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.contrast};
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  color: ${(props) => props.theme.tertiaryContrast};
  vertical-align: middle;
`;

export function ThanksMessage() {
  return (
    <Container>
      <Message center gap="2rem">
        <h3>Thanks for shopping!</h3>

        <p>
          This isn't a real store, but it's based off of a real Shopify theme:{' '}
          <a href="https://themes.shopify.com/themes/foodie/styles/grind">
            Foodie Theme on Shopify Themes
          </a>
        </p>

        <p>
          You can visit{' '}
          <a href="https://www.github.com/kathyavini">my github</a> to see more
          things I've made <Icon className="material-icons">favorite</Icon>
        </p>
      </Message>
    </Container>
  );
}
