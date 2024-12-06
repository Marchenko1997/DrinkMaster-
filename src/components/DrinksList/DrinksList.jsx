import DrinksItem from "./DrinksItem/DrinksItem.jsx"
import { useEffect, useState } from "react";
import {
  StyledDrinksList,
  DrinksListContainer,
  DrinksListTitle,
} from "./DrinksList.styled.jsx";
const DrinksList = ({ title, drinks }) => {
  const filteredDrinks = drinks.filter((drink) => drink.category === title);
  const [visibleDrinks, setVisibleDrinks] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleDrinks(3);
      } else if (screenWidth >= 768) {
        setVisibleDrinks(2);
      } else {
        setVisibleDrinks(1);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  
  const limitedDrinks = filteredDrinks.slice(0, visibleDrinks);

  return (
    <StyledDrinksList>
      <DrinksListTitle>{title}</DrinksListTitle>
      <DrinksListContainer>
        {limitedDrinks.map((drink) => (
          <DrinksItem
            key={drink._id}
            id={drink._id}
            drinkName={drink.drinkName}
            img={drink.drinkThumb}
          />
        ))}
      </DrinksListContainer>
    </StyledDrinksList>
  );
}

export default DrinksList