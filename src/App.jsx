import PublicRoute from "./helpers/PublicRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PrivateRoute } from "./helpers/PrivateRoute";
import { selectIsLoggedIn } from "./redux/selectors/auth.selectors";
import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "./redux/auth/auth.operations";
import SignInPage from "./pages/SignInPageTemp/SignInPageTemp";
import SignUpPage from "./pages/SignUpPageTemp/SignUpPageTemp";
import VerificationPage from "./pages/VerificationPage/VerificationPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  if (isLoggedIn && location.pathname === "/") {
    location.pathname = "/home";
  }

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(authOperations.currentUser());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Routes>
      <Route path="/user/:id" element={<VerificationPage />} />
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
        element={<PublicRoute redirectTo="/home" component={<SignInPage />} />}
      />
      <Route
        path="/"
        element={!isLoggedIn ? <WelcomePage /> : <SharedLayout />}
      >
        <Route
          index
          path="/home"
          element={
            <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
