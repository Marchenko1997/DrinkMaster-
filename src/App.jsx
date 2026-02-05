import PublicRoute from "./helpers/PublicRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PrivateRoute } from "./helpers/PrivateRoute";
import { selectIsLoggedIn } from "./redux/selectors/auth.selectors";
import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "./redux/auth/auth.operations";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import VerificationPage from "./pages/VerificationPage/VerificationPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const DrinksPage = lazy(() => import("./pages/DrinksPage/DrinksPage"));
const AddDrinkPage = lazy(() => import("./pages/AddDrinkPage/AddDrinkPage"));
const DrinkPage = lazy(() => import("./pages/DrinkPage/DrinkPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const MyDrinksPage = lazy(() => import("./pages/MyDrinksPage/MyDrinksPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(authOperations.currentUser());
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    if (isLoggedIn && location.pathname === "/") {
      navigate("home", { replace: true });
    }
  }, [isLoggedIn, location.pathname, navigate]);

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
        <Route
          path="/drinks"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DrinksPage />} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="welcome" component={<AddDrinkPage />} />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MyDrinksPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/welcome" component={<FavoritesPage />} />
          }
        />
        <Route
          path="/drink/:id"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DrinkPage />} />
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute redirectTo="/welcome" component={<ErrorPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
