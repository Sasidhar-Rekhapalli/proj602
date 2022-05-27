import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
import download from "../images/download.png";
import { Link } from "react-router-dom";

// Styled components for close button
const CloseBtn = styled.button`
  color: #fff;
  background-color: #800080;
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  float: right;
`;

//  Styled components for Add user button
const UserButton = styled.button`
  color: #fff;
  background-color: #800080;
  border-color: #f8f6f9;
  border-radius: 5px;
  float: right;
`;

// functional component
export default function UserManagement() {
  return (
    <>
      {/* Card for the form  */}
      <Card className="mx-auto container " style={{ marginTop: "80px" }}>
        <div className="AddUser" style={{ marginTop: "40px" }}>
          {/* Link for add user page with button  */}
          <Link to="/adduser">
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

        {/* Table with user name, role, permissions  */}
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Permissions</th>
            </tr>
          </thead>
          {/* User name, role, permission */}
          <tbody>
            <tr>
              <th scope="row">Graham Burnigham</th>
              <td>Graham123</td>
              <td>Admin</td>
              <td>All</td>
            </tr>
            {/* User name, role, permission */}
            <tr>
              <th scope="row">Bill Block</th>
              <td>BillB</td>
              <td>RCIC</td>
              <td>Read,Write</td>
            </tr>
            {/* User name, role, permission */}
            <tr>
              <th scope="row">Joe Dave</th>
              <td>Joe12</td>
              <td>RISIA</td>
              <td>Read</td>
            </tr>
          </tbody>
        </table>

        {/* Button to go back to student list with button  */}
        <div className="text-right">
          <Link to="/studentlist">
            <CloseBtn className="btn">Student</CloseBtn>
          </Link>
        </div>
      </Card>
    </>
  );
}
