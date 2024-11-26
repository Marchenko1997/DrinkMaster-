import { MainHeader, MobileBox, NavigationHeader } from "./Header.styled";
import LogoHeader from "./LogoHeader/LogoHeader";
import NavMenu from "./NavMenu/NavMenu";

const HeaderMain = () => {
  return (
    <MainHeader>
      <NavigationHeader>
        <LogoHeader />
        <NavMenu />
        <MobileBox></MobileBox>
      </NavigationHeader>
    </MainHeader>
  );
};

export default HeaderMain;
