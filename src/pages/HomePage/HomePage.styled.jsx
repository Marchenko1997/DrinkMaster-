import styled from "styled-components";
import { NavLink } from "react-router-dom";
import images from "../../assets/images/Hero/images.js";

export const StyledHomePage = styled.div`
  @media (min-width: 1280px) {
    background-image: url(${images.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box;
  }
`;
