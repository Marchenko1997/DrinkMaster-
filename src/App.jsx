import PublicRoute from "./helpers/PublicRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUpPage from "./pages/signUpPage/signUpPage";
import SignInPage from "./pages/signInPage/signInPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PrivateRoute } from "./helpers/PrivateRoute";
import { selectIsLoggedIn } from "./redux/selectors/auth.selectors";
import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "./redux/auth/auth.operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  if (isLoggedIn && location.pathname === "/") {
    location.pathname = "/home";
  }

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);


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
      <Route
        path="/signin"
        element={<PublicRoute redirectTo="/home"component={<SignInPage/>} />}
      />
      <Route
       path="/" element={!isLoggedIn ? <WelcomePage/> : <SharedLayout/>}
      >
        <Route
          index
          path="/home"
          element={ <PrivateRoute redirectTo="/welcome" component={<HomePage/>} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
