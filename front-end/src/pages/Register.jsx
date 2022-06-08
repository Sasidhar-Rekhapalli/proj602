import React, { Component } from "react";
import styled from "styled-components";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auths from "../api/auth";
import { FootNav, Navbar } from "../components";
// Styled components with custom style for the cancel button
const Btn = styled.button`
  float: right;
`;
// Styled component for the card title
const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;
const InputText = styled.input.attrs({
  className: `form-control`,
})`
  margin: 5px;
`;
const Label = styled.label`
  margin: 5px;
`;

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      tel: "",
      username: "",
      password: "",
      role: ""
    };
  }
  handleFirstNameReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "First Name must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ firstname: event.target.value });
    }
  };
  handleLastNameReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "Last Name must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ lastname: event.target.value });
    }
  };
  handleEmailReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "Email must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ email: event.target.value });
    }
  };
  handleTelReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "Telephone must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ tel: event.target.value });
    }
  };

  handleUserReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "Username must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ username: event.target.value });
    }
  };
  handlePasswordReg = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "" });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  handleRole = async(event) => {
    console.log(event.target.value);
    this.setState({ role: event.target.value});
  }

  handleRegister = async (event) => {
    event.preventDefault();

    const { firstname, lastname, email, tel, username, password,role } = this.state;
    await auths
      .postNewUser({ firstname, lastname, email, tel, username, password, role })
      .then(() => {
        /* if (response.data.message) {
          console.log("Unsuccessful");
          window.alert("Something went wrong");
        } else { */
        console.log("Successful");
        window.alert("User added successfully");
        this.props.history.push("/");
        // }
      });
  };
  render() {
    return (
      <>
        <Navbar />
        <Card className="container mt-3">
          <Card.Body>
            <div className="row mb-3">
              <div className="col-sm-12 col-12 text-center">
                <Header className="">Add User</Header>
                <Link to="/isms/usermanagement">
                  <Btn className="btn btn-danger pull-right">X</Btn>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>First Name</Label>
                  <InputText type="text" onChange={this.handleFirstNameReg} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>Last Name</Label>
                  <InputText type="text" onChange={this.handleLastNameReg} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>Email</Label>
                  <InputText type="text" onChange={this.handleEmailReg} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>Mobile Number</Label>
                  <InputText type="text" onChange={this.handleTelReg} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>UserName</Label>
                  <InputText type="text" onChange={this.handleUserReg} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-auto">
                  <Label>Password</Label>
                  <InputText type="text" onChange={this.handlePasswordReg} />
                </Form.Group>
                <Form.Select className="mb-3 col-md-auto" onChange={this.handleRole}>
                  <option>Select Role</option>
                  <option value="RISIA">RISIA</option>
                  <option value="RCIC">RCIC</option>
                  <option value="No Certification">No Certification</option>
                </Form.Select>
                <div className="text-center">
                  <Button
                    className="btn btn-primary"
                    onClick={this.handleRegister}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <FootNav />
      </>
    );
  }
}
export default RegisterUser;
