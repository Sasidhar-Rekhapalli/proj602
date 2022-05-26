import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
const Btn = styled.button`
  float: right;
`;
const ResetBtn = styled.button`
  color: #fff;
  background-color: #743c96;
`;
const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;
export default function Reset() {
  return (
    <>
      <Card className="mx-auto " style={{ width: "25%", marginTop: "150px" }}>
        <Card.Body>
          <div className="row mb-3">
            <div className="col-sm-12 col-12 text-center">
              <Header className="">Reset Password</Header>
              <Btn className="btn btn-danger pull-right">X</Btn>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Form>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="UserName"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="Password"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="RetypePassword"></Form.Control>
              </Form.Group>
              <div className="text-center">
                <ResetBtn className="btn">Reset</ResetBtn>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
