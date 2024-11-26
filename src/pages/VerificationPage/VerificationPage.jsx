import { useParams } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

const BASE_URL = "https://drinkmaster-backend-xthk.onrender.com/api";

import {
  WelcomeWrapper,
  WelcomeTitle,
  WelcomeText,
  Container,
  ButtonDiv,
  SignInBut,
} from "../../components/Welcome/Welcome.styled";

const VerificationPage = () => {
  const { id } = useParams();
  console.log(id);

 useEffect(() => {
   if (id) {
     axios
       .get(`${BASE_URL}/api/auth/verify/${id}`)
       .then(({ data }) => console.log(data))
       .catch((error) => console.error(error));
   }
 }, [id]);

  return (
    <WelcomeWrapper>
      <Container>
        <WelcomeTitle>Congrats!</WelcomeTitle>
        <WelcomeText>Your email was verificated successfully!</WelcomeText>
        <ButtonDiv>
          <SignInBut to="/signin">Sign In</SignInBut>
        </ButtonDiv>
      </Container>
    </WelcomeWrapper>
  );
};

export default VerificationPage;