import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Styled components with custom style for the cancel button
const Btn = styled.button`
  float: right;
`;

// Styled component for the card title
const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;

// React functional component
export default function addUser() {
  return (
    <>
      {/* Card with margin around it */}
      <Card className="container mt-2">
        <Card.Body>
          {/* Card body with title and cancel button */}
          <div className="row mb-3">
            <div className="col-sm-12 col-12 text-center">
              <Header className="">Add User</Header>
              <Link to="/usermanagement">
                <Btn className="btn btn-danger pull-right">X</Btn>
              </Link>
            </div>
          </div>
          {/* form */}
          <div className="d-flex justify-content-center">
            <Form>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for first name  */}
                <Form.Control placeholder="First name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for last name  */}
                <Form.Control placeholder="Last name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for email address  */}
                <Form.Control placeholder="email"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for mobile number  */}
                <Form.Control placeholder="mobile number"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for user name  */}
                <Form.Control placeholder="User name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                {/* input for password  */}
                <Form.Control placeholder="Password"></Form.Control>
              </Form.Group>
              {/* input for selecting role  */}
              <Form.Select className="mb-3 col-md-auto">
                <option>Select Role</option>
                <option>RISIA</option>
                <option>RCIC</option>
                <option>No Certification</option>
              </Form.Select>
              <div className="text-center">
                {/* button to create the new user  */}
                <Link to="/usermanagement">
                  <Button className="btn btn-primary">Create</Button>
                </Link>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
