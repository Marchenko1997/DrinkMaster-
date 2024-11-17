import styled from "styled-components";
import { Link } from "react-router-dom";

import bgImageMobile from "../../assets/images/welcomePage/bg-welcome-mobile@1x.jpg";
import bgImageMobile2x from "../../assets/images/welcomePage/bg-welcome-mobile@2x.jpg";
import bgImageTablet from "../../assets/images/welcomePage/bg-welcome-tablet@1x.jpg";
import bgImageTablet2x from "../../assets/images/welcomePage/bg-welcome-tablet@2x.jpg";
import bgImageDesctop from "../../assets/images/welcomePage/bg-welcome-desctop@1x.jpg";
import bgImageDesctop2x from "../../assets/images/welcomePage/bg-welcome-desctop@2x.jpg";

const transition = "300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)";

export const WelcomeWrapper = styled.section`
  background-image: url(${bgImageMobile});
  background-color: var(--background-color-welcome);
  background-position: center;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;