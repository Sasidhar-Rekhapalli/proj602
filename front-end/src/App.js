import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import AddStudent from "./components/AddStudent";
import UserManagement from "./components/UserManagement";
import Reset from "./pages/RessetPassword";
import Login from "./components/AddUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/reset" element={<Reset />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
      <AddStudent />
      <Login />
    </Router>
  );
}

export default App;
