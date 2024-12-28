import { Logo } from "./Logo/Logo.jsx";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import {
  FooterContainer,
  LogoAndSocialContainer,
  FooterNavContainer,
  NavAndFormContainer,
  // DocsLink,
  // DocsContainer,
  // DocsSubContainer,
} from "./Footer.styled";
import  SocialLinks  from "../SocialLinks/SocialLinks.jsx";

const Footer = () => {
  return (
    <FooterContainer>
      <NavAndFormContainer>
        <FooterNavContainer>
          <LogoAndSocialContainer>
            <Logo />
            <SocialLinks />
          </LogoAndSocialContainer>

          <FooterNavigation />
        </FooterNavContainer>
      </NavAndFormContainer>
    </FooterContainer>
  );
};

export default Footer;
