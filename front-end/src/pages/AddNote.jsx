import react, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Footer from "../components/FootNav";
import { Link } from "react-router-dom";

// Styled component for card title
const Header = styled.h2`
  margin: 0px 20px;
  text-align:center;
  display: inline-block;
`;

// function component
export default function AddNote() {
  return (
    <div className="container">
      <NavBar/>
      <div className="row m-3">
          {/* Card Title  */}
          <Header className="">Add Notes</Header>
      </div>
      {/* Card for form  */}
      <Card>
        <Card.Body>
          <div className="col-md-12">
            {/* Form  */}
            <Form className="m-3">
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
                  ></Form.Control>

                  {/* Label with category and select options  */}
                  <Form.Label className="col-md-3">Category :</Form.Label>
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
          className="navbar navbar-expand-lg m-3"
          style={{ "background-color": "#f1f1f1" }}
        >
          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                {/* Note  */}
                <a class="nav-link" href="#" style={{ color: "black" }} target="#one">
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

        {/* <div><p id="one" style={{"display":"none"}}>hello there</p></div> */}
        {/* Update the notes for specific student  */}
        <div style={{"display":"inline-block"}}>
        <Link to="/studentlist">
          <Button
            className="btn  m-3 col-md-2"
            style={{ float: "right",cursor:"pointer",background:"#744197",border:"none"}}
          >
            Update
          </Button>
        </Link>

        {/* Cancel button to go back to student list  */}
        <Link to="/studentlist">
          <Button
            className="btn btn-danger m-3 col-md-2"
            style={{ float: "right",cursor:"pointer"}}
          >
            Cancel
          </Button>
        </Link>
        </div>
      </Card>
      <Footer/>
    </div>
  );
}
