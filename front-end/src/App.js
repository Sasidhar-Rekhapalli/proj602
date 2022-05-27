import NavBar from "./components/Navbar";
import AddUser from "./components/AddUser";
import AddStudent from "./components/AddStudent";
import UserManagement from "./components/UserManagement";
import Reset from "./pages/RessetPassword";
import Login from "./pages/Login";
import Footer from "./components/footer";
import AddNote from "./pages/AddNote";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addnote" element={<AddNote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
