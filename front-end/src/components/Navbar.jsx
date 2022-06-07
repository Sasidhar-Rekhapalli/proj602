import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/navlogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div.attrs({
  className: "container",
})`
    padding: 0px;
  `;
const Nav = styled.div.attrs({
  className: "navbar navbar-expand-lg",
})`
    background-color: #753b97;
    padding: 20px 0px;
    justify-content: center;
  `;
const Heading = styled.h1.attrs({
  className: "page-header",
})`
    color: white;
    margin: 0px 20px;
    text-transform: uppercase;
    text-align:center;
  `;
const HeaderDown = styled.div.attrs({
  className: "navbar ",
})`
    background-color: grey;
    padding:0px;
    justify-content: right !important;
  `;
const TextLine = styled.a.attrs({
  className: "m-3",
})`
    color: white;
    margin:5px 10px !important;
    text-decoration: none;
    float: right;
  `;
class Navbar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <img src={Logo} width="200px" height="100px" alt="Logo" />
          <Heading>International Student Management System</Heading>
        </Nav>
        <HeaderDown>
          <TextLine href="/isms/usermanagement">Manage users</TextLine>
          <TextLine href="/">Logout</TextLine>
        </HeaderDown>
      </Container>
    );
  }
}
export default Navbar;
