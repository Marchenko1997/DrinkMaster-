import { Formik, ErrorMessage } from "formik";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as Yup from "yup";
import { WelcomeWrapper } from "../Welcome/Welcome.styled";
import Birthday from "./DatePicker.styled";
import ShowPassword from "../../assets/images/signSvg/eye.svg";
import HidePassword from "../../assets/images/signSvg/eye-off.svg";
import { authOperations } from "../../redux/auth/auth.operations";
import { Container, Title } from "./SignUpForm.styled";

const initialValues = {
  name: "",
  birthday: "",
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/[A-Za-z]+/, "Name must contain at least one letter")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
  birthday: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Please enter correct date"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Emails: digits, letters, . - _ only, e.g., example@mail.com."
    )
    .email("Invalid email format, example@mail.com")
    .required("Email is required, example@mail.com."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required. Example:Password123")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

const SignUpForm = () => {
  const [showpassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

    const handleTogglePassword = () => {
        setShowPassword(!showpassword);
    }

    
    
  return (
    <WelcomeWrapper>
      <Container>
        <ToastContainer transition={Slide} />
        <Title>Sign Up</Title>
      </Container>
    </WelcomeWrapper>
  );
};

export default SignUpForm;
