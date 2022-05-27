import react, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// Styled component for card title
const Header = styled.h2`
  margin: 0px 20px;
  display: inline-block;
`;

// function component
export default function AddNote() {
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-sm-12 col-12">
          {/* Card Title  */}
          <Header className="">Add Notes</Header>
        </div>
      </div>
      {/* Card for form  */}
      <Card className="m-3">
        <Card.Body>
          <div className="d-flex justify-content-center">
            {/* Form  */}
            <Form>
              <Form.Group>
                <div className="row mb-3">
                  {/* Label for student Id and input  */}
                  <Form.Label className="col-md-2">Student ID:</Form.Label>
                  <Form.Control className="col"></Form.Control>

                  {/* Label with student name and input  */}
                  <Form.Label className="col-md-3">
                    Student Full Name :{" "}
                  </Form.Label>
                  <Form.Control className="col"></Form.Control>
                </div>
              </Form.Group>

              {/* Label with subject and input  */}
              <Form.Group>
                <div className="row mb-3">
                  <Form.Label className="col-md-2">Subject : </Form.Label>
                  <Form.Control
                    className="col"
                    style={{ width: "600px" }}
                  ></Form.Control>

                  {/* Label with category and select options  */}
                  <Form.Label className="col">Category :</Form.Label>
                  <Form.Select className="col">
                    <option>-----Select Category---</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
        <nav
          className="navbar navbar-expand-lg"
          style={{ "background-color": "#f1f1f1" }}
        >
          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                {/* Note  */}
                <a class="nav-link" href="#" style={{ color: "black" }}>
                  Note
                </a>
              </li>
              {/* File in share folder  */}
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "black" }}>
                  File in share folder
                </a>
              </li>
              {/* option to upload file  */}
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "black" }}>
                  Uploaded File
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Update the notes for specific student  */}
        <Link to="/studentlist" style={{ display: "inline-block" }}>
          <Button
            className="btn btn-primary m-3 col-md-2"
            style={{ float: "right" }}
          >
            Update
          </Button>
        </Link>

        {/* Cancel button to go back to student list  */}
        <Link to="/studentlist" style={{ display: "inline-block" }}>
          <Button
            className="btn btn-primary m-3 col-md-2"
            style={{ float: "right" }}
          >
            Cancel
          </Button>
        </Link>
      </Card>
    </div>
  );
}
