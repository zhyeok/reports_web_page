import ReactDom from "react-dom";

const OverlayPortal = ({ children }) => {
  const el = document.getElementById("overlay");

  return ReactDom.createPortal(children, el);
};

export default OverlayPortal;
