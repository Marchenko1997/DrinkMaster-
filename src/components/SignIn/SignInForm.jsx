import { ErrorMessage, Formik } from "formik";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ReactComponent as ShowPassword } from "../../assets/images/signSvg/eye.svg";
import { ReactComponent as HidePassword } from "../../assets/images/signSvg/eye-off.svg";
import { WelcomeWrapper } from "../Welcome/Welcome.styled";
import { authOperations } from "../../redux/auth/auth.operations";
import {
  Container,
  Input,
  InputWrapper,
  AuthForm,
  Title,
  Button,
  ToggleButton,
  ErrorText,
  ErrorSvgStyled,
  CheckSvgStyled,
  Link,
} from "../SignUp/SignUpForm.styled";

const SignInForm = () => {
    return (
        <WelcomeWrapper>
            <Container>
                
        </Container>
      </WelcomeWrapper>
  );
};

export default SignInForm;
