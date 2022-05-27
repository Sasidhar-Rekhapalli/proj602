import React, { Component } from "react";
import styled from "styled-components";
import { Form, Card, Button, Nav, Placeholder } from "react-bootstrap";
import addStudent from "../images/logo.png";
import { Link } from "react-router-dom";

const AddStudentButton = styled.button`
  color: #fff;
  background-color: #800080;
  border-color: #f8f6f9;
  border-radius: 5px;
  height: 50px;
  float: right;
`;

const Title = styled.h1.attrs({
  className: "h1",
})`
  margin: 0 200px;
`;

const Label = styled.label`
  margin: 0 200px;
  font-weight: bold;
`;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 0 270px;
  width: 400px;
`;

export default function StudentList() {
  return (
    <>
      <Wrapper>
        <Title>Student</Title>
        <Label>Search: </Label>
        <InputText type="text" placeholder="Student ID" />
        <div
          className="AddStudent"
          style={{ marginRight: "170px", marginTop: "40px" }}
        >
          <Link to="/addstudent">
            <AddStudentButton>
              <img
                src={addStudent}
                width="30"
                height="30"
                style={{ padding: "2px" }}
              ></img>{" "}
              Add New / Prospective Student
            </AddStudentButton>
          </Link>
        </div>
        <Card className="mx-auto " style={{ width: "75%", marginTop: "80px" }}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Student ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Program</th>
              </tr>
            </thead>
            <tbody>
              <tr className="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Kelsey</td>
                <td>Deakan</td>
                <td>Software Development</td>
              </tr>
              <tr className="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Mireille</td>
                <td>Camplejohn</td>
                <td>Business</td>
              </tr>
              <tr className="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Emilio</td>
                <td>Tonnesen</td>
                <td>Civil Engineering</td>
              </tr>
              <tr className="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Barbi</td>
                <td>Minger</td>
                <td>Office Administration</td>
              </tr>
              <tr class="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Roosevelt</td>
                <td>Olivetti</td>
                <td>Business</td>
              </tr>
              <tr class="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Ulick</td>
                <td>Girardot</td>
                <td>Software Development</td>
              </tr>
              <tr class="results">
                <th scope="row">
                  <Link to="/addnote">000NNNNNN</Link>
                </th>
                <td>Merv</td>
                <td>Force</td>
                <td>Enviromental Engineering</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Wrapper>
    </>
  );
}
