import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={<WelcomePage />}
      />
    </Routes>
  );
};

export default App;
