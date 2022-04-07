import styled from "styled-components";
import zIndex from "../styles/constants/z-index";

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  overflow: hidden;
  z-index: ${zIndex.overlay};
`;

const Overlay = ({ closeHandler }) => {
  return <Background onClick={closeHandler}></Background>;
};

export default Overlay;
