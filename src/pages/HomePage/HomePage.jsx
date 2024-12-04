import Hero from "../../components/Hero/Hero";
import { StyledHomePage } from "./HomePage.styled.jsx";

const HomePage = () => {
  return (
    <StyledHomePage className="container">
      <Hero />
    </StyledHomePage>
  );
}

export default HomePage