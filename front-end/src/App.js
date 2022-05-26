import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import AddStudent from "./components/AddStudent";
import UserManagement from "./components/UserManagement";
import Login from "./components/AddUser";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AddStudent />
      <Login/>
    </Router>
   
  );
}

export default App;
