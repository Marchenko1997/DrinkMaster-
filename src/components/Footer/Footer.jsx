import { Logo } from "./Logo/Logo.jsx";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import {
  FooterContainer,
  LogoAndSocialContainer,
  FooterNavContainer,
  NavAndFormContainer,
  DocsContainer,
   DocsLink,
   DocsSubContainer,
} from "./Footer.styled";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm.jsx";
import PrivacyPolicy from "../../assets/docs/PrivacyPolicy.txt";
import PublicAgreement from "../../assets/docs/PublicAgreement.txt";

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
        <SubscriptionForm />
      </NavAndFormContainer>
      <DocsContainer>
        <DocsLink
          href="https://drinkmaster-backend-xthk.onrender.com/api-docs/"
          target="blank"
        >
          {" "}
          ©2025 Drink Master. All rights reserved.
        </DocsLink>
        <DocsSubContainer>
          <DocsLink href={PrivacyPolicy} download>
            Privacy Policy
          </DocsLink>
          <DocsLink href={PublicAgreement} download>
            Public Agreement
          </DocsLink>
        </DocsSubContainer>
      </DocsContainer>
    </FooterContainer>
  );
};

export default Footer;
