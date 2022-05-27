import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
import download from "../images/download.png";
import { Link } from "react-router-dom";
const CloseBtn = styled.button`
  color: #fff;
  background-color: #800080;
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  float: right;
`;
const UserButton = styled.button`
  color: #fff;
  background-color: #800080;
  border-color: #f8f6f9;
  border-radius: 5px;
  float: right;
`;

export default function UserManagement() {
  return (
    <>
      <div
        className="AddUser"
        style={{ marginRight: "170px", marginTop: "40px" }}
      >
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
      <Card className="mx-auto " style={{ width: "75%", marginTop: "80px" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graham Burnigham</th>
              <td>Graham123</td>
              <td>Admin</td>
              <td>All</td>
            </tr>
            <tr>
              <th scope="row">Bill Block</th>
              <td>BillB</td>
              <td>RCIC</td>
              <td>Read,Write</td>
            </tr>
            <tr>
              <th scope="row">Joe Dave</th>
              <td>Joe12</td>
              <td>RISIA</td>
              <td>Read</td>
            </tr>
          </tbody>
        </table>

        <div className="text-right">
          <Link to="/addstudent">
            <CloseBtn className="btn">Student</CloseBtn>
          </Link>
        </div>
      </Card>
    </>
  );
}
