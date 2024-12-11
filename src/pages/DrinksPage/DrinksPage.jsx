import Title from '../../components/Title/Title'
import { useState } from 'react'
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar'
import { SearchingContainer } from './DrinksPage.styled'

const DrinksPage = () => {
    const [drink, setDrink] = useState("");
  return (
      <main className='container'>
          <Title text={"Drinks"} />
          <SearchingContainer>
              <SearchBar setDrink={setDrink} />
          </SearchingContainer>
    </main>
  )
}

export default DrinksPage