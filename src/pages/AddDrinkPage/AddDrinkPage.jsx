import { FormContainer, MainContainer, PopularContainer } from "./AddDrinkPage.styled"
import AddDrinkForm from "../../components/AddDrinkR/AddDrinkForm"
import PopularDrinks from "../../components/AddDrink/PopularDrinks/PopularDrinks"
const AddDrinkPage = () => {
  return (
      <MainContainer className="container">
          <FormContainer>
              <AddDrinkForm />
          </FormContainer>
          <PopularContainer>
              <PopularDrinks />
          </PopularContainer>
    </MainContainer>
  )
}

export default AddDrinkPage