import { FormContainer, MainContainer, PopularContainer } from "./AddDrinkPage.styled"
import AddDrinkForm from "../../components/AddDrinkR/AddDrinkForm"

const AddDrinkPage = () => {
  return (
      <MainContainer className="container">
          <FormContainer>
              <AddDrinkForm />
          </FormContainer>
          <PopularContainer></PopularContainer>
    </MainContainer>
  )
}

export default AddDrinkPage