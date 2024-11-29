import { BtnBurger, SvgIconBurger } from "./BurgerMenuButton.styled";
const sprite = "/icons.svg";

const BurgerMenuButton = ({ isOpenMenu, setIsOpenMenu }) => {
    const toggleBurgerMenu = () => setIsOpenMenu(prev => !prev);

    return (
      <BtnBurger type="button" onClick={toggleBurgerMenu}>
        <SvgIconBurger>
          <use
            xlinkHref={
              isOpenMenu ? `${sprite}#icon-close` : `${sprite}#icon-menu-burger`
            }
          ></use>
        </SvgIconBurger>
      </BtnBurger>
    );
};

export default BurgerMenuButton;
