//////////////////////////////////////               UserManagement.jsx                //////////////////////////////////////
/**
 *
 * @file UserManagement.jsx
 * @copyright ISMS(International Student Management System)
 * @version 3.0.0
 * @author cyberbot team, software developer program
 * @release summer 2022
 * @owner Saskatchewan Polytechnic, Saskatoon Campus
 *
 */
//////////////////////////////////////
import React,{Component} from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
import download from "../images/download.png";
import { Link } from "react-router-dom";
import { Navbar,FootNav,UserList } from "../components";

// Styled components for close button
const CloseBtn = styled.button`
  color: #fff;
  background-color: #800080;
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  float: right;
  margin-top: 40px;
`;

//  Styled components for Add user button
const UserButton = styled.button`
  color: #fff;
  background-color: #800080;
  border-color: #f8f6f9;
  border-radius: 5px;
  float: right;
`;

//UserManagement class to create the view for User management page
class UserManagement extends Component {
  render(){
    return (
        <>
        {/* Nav bar for the page */}
        <Navbar/>
          <Card className="mx-auto container " style={{ marginTop: "15px" }}>
            <div className="AddUser" style={{ marginTop: "40px" }}>
              {/* Link for add user page with button  */}
              <Link to="/isms/register">
                <UserButton>
                  <img
                    src={download}
                    width="30"
                    height="30"
                    style={{ padding: "2px" }}
                  ></img>{" "}
                  Add User
                </UserButton>
              </Link>
            </div>
            {/* Calling functonality for user management page */}
            <UserList/>
            {/* Link button to go back to student main Page */}
            <div className="text-right">
              <Link to="/isms/studentpage">
                <CloseBtn className="btn">Student</CloseBtn>
              </Link>
            </div>
          </Card>
          {/* Footer part */}
          <FootNav/>
        </>
      );
}
}
export default UserManagement;
