import {
  StyledDrinksItem,
  ImgContainer,
  DrinkImgWrapper,
  DrinkImg,
  ContentContainer,
  DrinkName,
  SeeMoreLink,
} from "./DrinkItem.styled";

const DrinkItem = ({ img, id, drinkName }) => {
  return (
    <StyledDrinksItem>
      <ImgContainer>
        <DrinkImgWrapper>
          <DrinkImg src={`${img}`} alt={drinkName} />
        </DrinkImgWrapper>
      </ImgContainer>
      <ContentContainer>
        <DrinkName>{drinkName}</DrinkName>
        <SeeMoreLink to={`/drink/${id}`}>See more</SeeMoreLink>
      </ContentContainer>
    </StyledDrinksItem>
  );
};

export default DrinkItem;
