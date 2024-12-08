import Hero from "../../components/Hero/Hero";
import {
  StyledHomePage,
  CategoryListsContainer,
  OtherDrinksLink,
} from "./HomePage.styled.jsx";
import DrinksList from "../../components/DrinksList/DrinksList.jsx";
import { useEffect } from "react";
import { Loader } from "../../components/Loader/Loader.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectError,
  selectHomepageDrinks,
  selectIsLoading,
} from "../../redux/selectors/drinks.selectors";
import { fetchHomePageDrinks } from "../../redux/drinks/drinks.operations";

const HomePage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectHomepageDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchHomePageDrinks());
  }, [dispatch]);

  return (
    <StyledHomePage className="container">
      <Hero />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <CategoryListsContainer>
        <DrinksList
          drinks={drinks}
          title={"Ordinary Drink"}
          key={"OrdinaryDrink"}
        />
        <DrinksList drinks={drinks} title={"Cocktail"} key={"Cocktail"} />
        <DrinksList drinks={drinks} title={"Shake"} key={"Shake"} />
        <DrinksList
          drinks={drinks}
          title={"Other/Unknown"}
          key={"OtherUnknown"}
        />
      </CategoryListsContainer>
      <OtherDrinksLink to="/drinks">Other drinks</OtherDrinksLink>
    </StyledHomePage>
  );
};

export default HomePage;
