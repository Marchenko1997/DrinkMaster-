import Title from "../../components/Title/Title";
import { useState } from "react";
import SearchBar from "../../components/DrinkSearch/SearchBar/SearchBar";
import { SearchingContainer } from "./DrinksPage.styled";
import SearchSelectCategory from "../../components/DrinkSearch/Select/SearchSelectCategory";
import SearchSelectIngredients from "../../components/DrinkSearch/Select/SearchSelectIngredients";
import DrinkItem from "../../components/DrinksList/DrinksItem/DrinksItem";
import DrinkList from "../../components/DrinkList/DrinkList";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDrinks,
  selectIsLoadingDrinks,
} from "../../redux/selectors/drinks.selectors.js";

const DrinksPage = () => {
  const [drink, setDrink] = useState("");
  const [category, setCategory] = useState("");
    const [ingredient, setIngredient] = useState("");
    const isLoading = useSelector(selectIsLoadingdrinks);
  return (
    <main className="container">
      <Title text={"Drinks"} />
      <SearchingContainer>
        <SearchBar setDrink={setDrink} />
              <SearchSelectCategory setCategory={setCategory} />
              <SearchSelectIngredients setIngridient={setIngredient} />
          </SearchingContainer>
          <div className="categoryListsContainer">
              {isLoading && <Loader />}
              
                </div>
    </main>
  );
};

export default DrinksPage;
