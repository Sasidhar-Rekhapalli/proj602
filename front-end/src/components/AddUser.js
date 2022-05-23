import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";

const Btn = styled.button`
  float: right;
`;

const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;

export default function addUser() {
  return (
    <>
      <Card className="m-3">
        <Card.Body>
          <div className="row mb-3">
            <div className="col-sm-12 col-12 text-center">
              <Header className="">Add User</Header>
              <Btn className="btn btn-danger pull-right">X</Btn>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Form>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="First name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="Last name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="email"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="mobile number"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="User name"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="Password"></Form.Control>
              </Form.Group>
              <Form.Select className="mb-3 col-md-auto">
                <option>Select Role</option>
                <option>RISIA</option>
                <option>RCIC</option>
                <option>No Certification</option>
              </Form.Select>
              <div className="text-center">
                <Button className="btn btn-primary">Create</Button>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
