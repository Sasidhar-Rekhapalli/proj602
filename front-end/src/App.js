import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import AddStudent from "./components/AddStudent";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AddStudent />
    </Router>
  );
}

export default App;
