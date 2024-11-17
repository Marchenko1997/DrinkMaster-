import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRoute from "./helpers/PublicRoute";

const App = () => {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={<PublicRoute redirectTo="/home" component={<WelcomePage />} />}
      />
    </Routes>
  );
};

export default App;
