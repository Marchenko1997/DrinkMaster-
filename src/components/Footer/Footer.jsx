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
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm.jsx";

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
        <SubscriptionForm/>
      </NavAndFormContainer>
    </FooterContainer>
  );
};

export default Footer;
