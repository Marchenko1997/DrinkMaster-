import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import DrinkList from "../../components/DrinkList/DrinkList";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import { NotFoundCocktail } from "../../components/NotFoundDrink/NotFound";
import { Loader } from "../../components/Loader/Loader";
import PaginationPanel from "../../components/Pagination/Pagination";
import { StyledDivNotFound } from "./FavoritesPage.styled";
import {
  selectFavoriteCocktails,
  selectIsLoading,
  selectTotalFavorites,
} from "../../redux/selectors/drinks.selectors";
import {
  deleteFromFavorites,
  fetchFavoriteCocktails,
} from "../../redux/drinks/drinks.operations";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const cocktails = useSelector(selectFavoriteCocktails);
  const isLoading = useSelector(selectIsLoading);
  const totalFavorites = useSelector(selectTotalFavorites);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchFavoriteCocktails());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      const newCocktailsPerPage = screenWidth >= 1200 ? 9 : 8;

      if (newCocktailsPerPage !== perPage) {
        setPerPage(newCocktailsPerPage);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [perPage, page]);

  const totalPages = Math.ceil(totalFavorites / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalFavorites);

  return (
    <main className="container">
      {isLoading === true && <Loader />}
      <Title text={"Favorites"} />
      {cocktails.length === 0 ? (
        <StyledDivNotFound>
          <NotFoundCocktail />
          <p>You haven`t added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <>
          {totalFavorites !== 0 && (
            <DrinkList>
              {cocktails.slice(startIndex, endIndex).map((cocktail) => (
                <DrinkCard
                  key={cocktail._id}
                  id={cocktail._id}
                  name={cocktail.drink}
                  imgUrl={cocktail.drinkThumb}
                  alcoholic={cocktail.alcoholic}
                  description={cocktail.description}
                  handleDelete={deleteFromFavorites}
                />
              ))}
            </DrinkList>
          )}
          {totalPages > 1 && <PaginationPanel pageQuan={totalPages} />}
        </>
      )}
    </main>
  );
};

export default FavoritesPage;
