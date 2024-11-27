import { MainHeader, MobileBox, NavigationHeader } from "./Header.styled";
import LogoHeader from "./LogoHeader/LogoHeader";
import NavMenu from "./NavMenu/NavMenu";
import ToggleDesktop from "./ToggleDesktop/ToggleDesktop";
import UserMenu from "./UserMenu/UserMenu";
import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton/BurgerMenuButton";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpenMenu) {
        window.document.body.style.overflow = "hidden";
      } else {
        window.document.body.style.overflow = "auto";
      }
    }
  }, [isOpenMenu]);

  const handleClick = () => setIsOpenMenu(false);


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
        {isOpenMenu && !isDesktop && <MobileMenu handleClick={handleClick} />}
      </NavigationHeader>
    </MainHeader>
  );
};

export default HeaderMain;
