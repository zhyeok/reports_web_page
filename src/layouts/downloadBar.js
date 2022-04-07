import styled from "styled-components";
import colors from "../styles/constants/colors";
import opacity from "../styles/constants/opacity";
import flexbox from "../styles/function/flexbox";
import transitionStyle from "../styles/function/transition";
import iosIcon from "../assets/images/icon/ios.svg";
import adroidIcon from "../assets/images/icon/adroid.svg";

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-weight: 700;
  display: flex;
  position: fixed;
  bottom: 0;
`;

const A = styled.a`
  width: 50%;
  height: 100%;
  ${flexbox()};
  white-space: nowrap;
  transition: ${transitionStyle("opacity")};

  &:hover,
  &:active {
    opacity: ${opacity.base};
  }

  img {
    width: 16px;
    margin-right: 10px;
  }
`;

const DownloadBar = () => {
  return (
    <Box>
      <A
        href="https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%8A%A4/id1578637889"
        target="_blank"
      >
        <img src={iosIcon} />
        <p>App Store</p>
      </A>
      <A
        href="https://play.google.com/store/apps/details?id=com.report.semos"
        target="_blank"
      >
        <img src={adroidIcon} />
        <p>Google Play</p>
      </A>
    </Box>
  );
};

export default DownloadBar;
