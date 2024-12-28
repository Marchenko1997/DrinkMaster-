import DrinkList from "../../components/DrinkList/DrinkList";
import Title from "../../components/Title/Title";
import { Loader } from "../../components/Loader/Loader";
import { NotFoundCocktail } from "../../components/NotFoundDrink/NotFound";
import PaginationPanel from "../../components/Pagination/Pagination";
import OwnDrinkCard from "../../components/DrinkCard/OwnDrinkCard";
import {
  deleteOwnCocktail,
  fetchOwnCoctails,
} from "../../redux/drinks/drinks.operations.js";
import {
  selectIsLoading,
  selectOwnCocktails,
  selectTotalOwnCocktails,
} from "../../redux/selectors/drinks.selectors.js";
import { StyledDivNotFound } from "./MyDrinks.styled.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const MyDrinksPage = () => {
    const dispatch = useDispatch();
    
  return (
    <div>MyDrinksPage</div>
  )
}

export default MyDrinksPage