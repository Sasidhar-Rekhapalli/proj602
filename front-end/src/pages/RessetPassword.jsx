import React from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";

// Styled component for cancel button
const Btn = styled.button`
  float: right;
`;

// Styled component for Reset button
const ResetBtn = styled.button`
  color: #fff;
  background-color: #743c96;
`;

// Styled component for Card tilte
const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;

// Functional component
export default function Reset() {
  return (
    <>
      {/* Card for form  */}
      <Card className="mx-auto " style={{ width: "85%", marginTop: "120px" }}>
        <Card.Body>
          <div className="row mb-3">
            <div className="col-sm-12 col-12 text-center">
              {/* Card Title  */}
              <Header className="">Reset Password</Header>
              {/* Button to cancel the page  */}
              <Btn className="btn btn-danger pull-right">X</Btn>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {/* Form for reset password  */}
            <Form>
              {/* Form input for username  */}
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="UserName"></Form.Control>
              </Form.Group>
              {/* Form input for password  */}
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="Password"></Form.Control>
              </Form.Group>
              {/* Form input for Retype password  */}
              <Form.Group className="mb-3 col-md-auto">
                <Form.Control placeholder="RetypePassword"></Form.Control>
              </Form.Group>
              {/* Reset button  */}
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
