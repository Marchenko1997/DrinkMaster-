import { SvgIcon, LogoLink, IconText } from "./LogoHeader.styled";
const sprite = "/icons.svg";

const LogoHeader = ({ handleClick }) => {
  return (
    <>
      <LogoLink to="/home" onClick={handleClick}>
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-Vector`}></use>
        </SvgIcon>
        <IconText>Drink Master</IconText>
      </LogoLink>
    </>
  );
};

export default LogoHeader;
