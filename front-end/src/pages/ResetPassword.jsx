import React,{Component} from "react";
import styled from "styled-components";
import { Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FootNav,Navbar } from "../components";
import auths from '../api/auth';

// Styled component for cancel button
const Btn = styled.button`
  float: right;
`;

// Styled component for Reset button
const ResetBtn = styled.button`
  color: #fff;
  border:none;
  text
  padding : 5px 100px;
  background-color: #743c96;
`;

// Styled component for Card tilte
const Header = styled.h2`
  margin: 0;
  display: inline-block;
`;

const {REACT_APP_PASSWORD} = process.env;

class ResetPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      masterpassword:''

    }
  }

  handleusername = async event=>{
    var username  = event.target.value;
    this.setState({username:username})
}

handlepassword = async event=>{
  var password  = event.target.value;
  this.setState({password:password})
}

handlemasterPassword = async event=>{
  var masterpassword  = event.target.value;
  this.setState({masterpassword:masterpassword})
}

handleCheck = async event =>{
  event.preventDefault();
  const masterpassword = this.state.masterpassword;
  
  if(REACT_APP_PASSWORD===masterpassword){
    
    const {username, password } = this.state;
    await auths.resetPassword({username, password}).then((response)=>{
        window.alert("Password reset successfully");
        this.props.history.push("/");
      })
  }
  else{
    console.log("not match--------------")
  }
}

  render(){
    return (
      <>
      <Navbar/>
        {/* Card for form  */}
        <Card className="container " style={{ marginTop: "10px" }}>
          <Card.Body>
            <div className="row mb-3">
              <div className="col-sm-12 col-12 text-center">
                {/* Card Title  */}
                <Header className="">Reset Password</Header>
                {/* Button to cancel the page  */}
                <Link to="/">
                  <Btn className="btn btn-danger pull-right">X</Btn>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {/* Form for reset password  */}
              <Form  onSubmit={this.handleCheck}>
              <Form.Group className="mb-3 col-md-auto">
                  <Form.Control placeholder="Master Password" type="password" onChange={this.handlemasterPassword}></Form.Control>
                </Form.Group>
                {/* Form input for username  */}
                <Form.Group className="mb-3 col-md-auto">
                  <Form.Control placeholder="UserName" onChange={this.handleusername}></Form.Control>
                </Form.Group>
                {/* Form input for password  */}
                <Form.Group className="mb-3 col-md-auto">
                  <Form.Control placeholder="Password" type="password" onChange={this.handlepassword}></Form.Control>
                </Form.Group>
                {/* Form input for Retype password  */}
                <Form.Group className="mb-3 col-md-auto">
                  <Form.Control placeholder="RetypePassword" type="password"></Form.Control>
                </Form.Group>
                {/* Reset button  */}
                
                  <div className="text-center">
                    <ResetBtn type="submit">Reset</ResetBtn>
                  </div>
               
              </Form>
            </div>
          </Card.Body>
        </Card>
        <FootNav/>
      </>
    );
  }
}
export default ResetPassword;
