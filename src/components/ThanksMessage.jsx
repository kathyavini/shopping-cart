import styled from 'styled-components';
import { StyledStack } from '../styles/Layout/StyledStack';
import { motion, AnimatePresence } from 'framer-motion';

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: hsl(0, 0%, 0%, 0.5);
`;

const Message = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: clamp(300px, 70vw, 500px);
  font-size: clamp(1.3rem, 0.9rem + 2vw, 2rem);
  background-color: ${(props) => props.theme.background};
  line-height: 2.2rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-block: 4rem;
  padding-inline: 2rem;
  border-radius: 3px;

  h3 {
    font-family: ${(props) => props.theme.secondaryFont};
  }

  p {
    font-family: ${(props) => props.theme.mainFont};
  }
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

export function ThanksMessage({ hideMsg }) {
  const backdrop = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const modal = {
    hidden: {
      y: `-110vh`,
      opacity: 0,
    },
    visible: {
      y: '-10px',
      opacity: 1,
      transition: { delay: 0.1, type: 'spring', stiffness: 110 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Backdrop
      onClick={hideMsg}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Message variants={modal}>
        <h3>Thanks for shopping!</h3>

        <p>
          This isn't a real store, but you can check out the{' '}
          <a href="https://themes.shopify.com/themes/foodie/styles/grind">
            real Shopify theme it's based on
          </a>
          .
        </p>

        <p>
          Visit <a href="https://www.github.com/kathyavini">my github</a> to see
          more things I've made <Icon className="material-icons">favorite</Icon>
        </p>
      </Message>
    </Backdrop>
  );
}
