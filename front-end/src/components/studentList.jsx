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
  lette-spacing:0px !important  ;
  float: right;
`;

const Title = styled.h1.attrs({
  className: "h1",
})`
 text-align:center;
 margin:10px 0px;
`;

const Label = styled.label`
  font-weight: bold;
  display:inline-block;
`;

const Wrapper = styled.div.attrs({
  className: "form-group container",
})`
  padding:0px;
  text-transform: capitalize;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  display:inline-block;
  width: 400px;
`;

export default function StudentList() {
  return (
    <>
      <Wrapper>
        <Title>Student</Title>
        <Label>Search: </Label>
        <InputText type="text" placeholder="Student ID" />
        <div className="AddStudent">
          <Link to="/addstudent">
            <AddStudentButton style={{"letterSpacing":"0px", "padding":"0px 10px","margin":"10px 0px"}}>
              <img
                src={addStudent}
                width="30px"
                height="30px"
                style={{ padding: "2px" }}
              ></img>{" "}
              Add New / Prospective Student
            </AddStudentButton>
          </Link>
        </div>
        <Card className="mx-auto " style={{ width: "100%", marginTop: "80px" }}>
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
