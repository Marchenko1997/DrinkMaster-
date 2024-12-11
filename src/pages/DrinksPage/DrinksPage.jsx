import Title from '../../components/Title/Title'
import { useState } from 'react'
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar'
import { SearchingContainer } from './DrinksPage.styled'
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory'

const DrinksPage = () => {
    const [drink, setDrink] = useState("");
    const [category, setCategory] = useState("");
  return (
      <main className='container'>
          <Title text={"Drinks"} />
          <SearchingContainer>
              <SearchBar setDrink={setDrink} />
              <SearchSelectCategory setCategory={setCategory}/>
          </SearchingContainer>
    </main>
  )
}

export default DrinksPage