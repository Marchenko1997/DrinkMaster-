import { MainHeader, MobileBox, NavigationHeader } from "./Header.styled";
import LogoHeader from "./LogoHeader/LogoHeader";
import NavMenu from "./NavMenu/NavMenu";
import ToggleDesktop from "./ToggleDesktop/ToggleDesktop";

const HeaderMain = () => {
  return (
    <MainHeader>
      <NavigationHeader>
        <LogoHeader />
        <NavMenu />
              <MobileBox>
            <ToggleDesktop/>
        </MobileBox>
      </NavigationHeader>
    </MainHeader>
  );
};

export default HeaderMain;
