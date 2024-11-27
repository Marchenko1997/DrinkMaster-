import { MainHeader, MobileBox, NavigationHeader } from "./Header.styled";
import LogoHeader from "./LogoHeader/LogoHeader";
import NavMenu from "./NavMenu/NavMenu";
import ToggleDesktop from "./ToggleDesktop/ToggleDesktop";
import UserMenu from "./UserMenu/UserMenu";
import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton/BurgerMenuButton";

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <MainHeader>
      <NavigationHeader>
        <LogoHeader />
        <NavMenu />
        <MobileBox>
          <ToggleDesktop isOpenMenu={isOpenMenu} />
          {!isOpenMenu && <UserMenu />}
          <BurgerMenuButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </MobileBox>
      </NavigationHeader>
    </MainHeader>
  );
};

export default HeaderMain;
