import { MainHeader, MobileBox, NavigationHeader } from "./Header.styled";
import LogoHeader from "./LogoHeader/LogoHeader";

const HeaderMain = () => {
    return (
        <MainHeader>
            <NavigationHeader>
                <LogoHeader/>
                <MobileBox></MobileBox>
        </NavigationHeader>
      </MainHeader>
  );
};

export default HeaderMain;
