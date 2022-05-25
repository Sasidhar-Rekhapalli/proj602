import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import Reset from "./components/ResetPassword";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AddUser />
      <Reset />
    </Router>
  );
}

export default App;
