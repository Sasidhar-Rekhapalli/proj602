import react,{useState} from 'react';
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
// import Logo from '../image/logo.png';
// import '../css/loginpage.css';

const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;

const LabelText = styled.label`

`

export default function Login() {
    return(
        <div className="container">
            <Card className="m-3">
                <Card.Body>
                    <div className="row mb-3">
                        <div className="col-sm-12 col-12">
                            <Header className="">Add User</Header>
                            {/* <Btn className="btn btn-danger pull-right">X</Btn> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <Form>
                        <Form.Group>
                            <div className="row mb-3">
                                <Form.Label className="col-md-2">Student ID:</Form.Label>
                                <Form.Control className="col"></Form.Control>
                                <Form.Label className="col-md-3">Student Full Name : </Form.Label>
                                <Form.Control className="col"></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group>
                                <div className="row mb-3">
                                <Form.Label className="col-md-2">Subject : </Form.Label>
                                <Form.Control className="col" style={{width:"600px"}}></Form.Control>
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
                <nav className="navbar navbar-expand-lg" style={{"background-color":"gray"}}>
                <div class="collapse navbar-collapse" id="basicExampleNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Note</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">File in share folder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Uploaded File</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </Card>
            </div>
    )
}

