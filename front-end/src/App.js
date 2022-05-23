import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AddUser />
    </Router>
  );
}

export default App;
