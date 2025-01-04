import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  StyledButtonsWrapper,
  StyledCocktailAlcoholic,
  StyledCocktailDescription,
  StyledCocktailImage,
  StyledCocktailName,
  StyledCocktailSeeMore,
  StyledCocktailWrapper,
  StyledDeleteButton,
} from "./DrinkCard.styled";
import { StyledCocktailImageContainer } from "../DrinkSearch/DrinksList/DrinksItem/DrinksItem.styled";
import { deleteFromFavorites } from "../../redux/drinks/drinks.operations";
const sprite = "/icons.svg";

const DrinkCard = ({ name, description, imgUrl, alcoholic, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (coctailId) => {
    dispatch(deleteFromFavorites(coctailId));
  };

  return (
    <StyledCocktailWrapper>
      <StyledCocktailImageContainer>
        <StyledCocktailImage src={imgUrl} alt={name} />
      </StyledCocktailImageContainer>
      <div>
        <StyledCocktailName>{name}</StyledCocktailName>
        <StyledCocktailAlcoholic>{alcoholic}</StyledCocktailAlcoholic>
      </div>
      <StyledCocktailDescription>{description}</StyledCocktailDescription>
      <StyledButtonsWrapper>
        <NavLink to={`/drink/${id}`}>
          <StyledCocktailSeeMore>See more</StyledCocktailSeeMore>
        </NavLink>
        <StyledDeleteButton onClick={() => handleDelete(id)}>
          <svg>
            <use xlinkHref={`${sprite}#icon-trash`} />
          </svg>
        </StyledDeleteButton>
      </StyledButtonsWrapper>
    </StyledCocktailWrapper>
  );
};

export default DrinkCard;
