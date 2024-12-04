import Hero from "../../components/Hero/Hero";
import { StyledHomePage } from "./HomePage.styled.jsx";
import DrinkList from "../../components/DrinkList/DrinkList.jsx";

const HomePage = () => {
  return (
    <StyledHomePage className="container">
      <Hero />
      <DrinkList />
    </StyledHomePage>
  );
}

export default HomePage