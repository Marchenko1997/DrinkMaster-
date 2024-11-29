import {
  Backdrop,
  BtnClose,
  ButtonsBlock,
  CancelBtn,
  LogoutBtn,
  ModalLogoutText,
  ModalWindow,
  SvgIconClose,
} from "./LogoutSure.styled";
import { authOperations } from "../../../../redux/auth/auth.operations";
import { useDispatch } from "react-redux";
const sprite = "/icons.svg";

const LogoutSure = ({ setIsOpenLogout }) => {
  const dispatch = useDispatch();

  const handleClick = () => setIsOpenLogout(false);

  return (
    <Backdrop>
      <ModalWindow>
        <div>
          <BtnClose type="button" onClick={handleClick}>
            <SvgIconClose>
              <use xlinkHref={`${sprite}#icon-close}`}></use>
            </SvgIconClose>
          </BtnClose>
        </div>
        <div>
          <ModalLogoutText>Are you sure you want to logout?</ModalLogoutText>
          <ButtonsBlock>
            <LogoutBtn
              type="button"
              onClick={() => dispatch(authOperations.signOut())}
            >
              Log out
            </LogoutBtn>
            <CancelBtn onClick={handleClick}>Cancel</CancelBtn>
          </ButtonsBlock>
        </div>
      </ModalWindow>
    </Backdrop>
  );
};

export default LogoutSure;
