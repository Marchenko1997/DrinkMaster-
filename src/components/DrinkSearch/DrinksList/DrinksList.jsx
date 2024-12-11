import DrinkItem from "../../DrinksList/DrinksItem/DrinksItem";
import DrinkList from "../../DrinkList/DrinkList";

const DrinksList = ({drinks}) => {
  return (
    <DrinkList className="drinksList">
      {limitedDrinks.map((drink) => (
        <DrinkItem
          key={drink._id}
          className="drinksListItem"
          id={drink._id}
          name={drink.drink}
          img={drink.drinkThumb}
        />
      ))}
    </DrinkList>
  );
}

export default DrinksList