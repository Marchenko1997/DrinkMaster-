import PublicRoute from "./helpers/PublicRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/signUpPage/signUpPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={<PublicRoute redirectTo="/home" component={<WelcomePage />} />}
      />
      <Route
        path="/signup"
        element={<PublicRoute redirectTo="/home" component={<SignUpPage />} />}
      />
    </Routes>
  );
};

export default App;
