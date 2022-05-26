import logo from "../logo.png";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import React from "react";

const Nav = styled.nav`
height: 15px
display: flex;
border: 5px solid black;
justify-content: space-between;
padding: 10px;
z-index: 10;
`;

const Title = styled.nav`
  font-size: xx-large;
  margin-left: 10px;
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const NavBtn = styled.nav`
  display: flex;
  justify-content: right;
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #010606;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <NavLink to="">
        <img src={logo} width="50" height="50"></img>
        <Title>International Student Management</Title>
      </NavLink>
      <NavBtn>
        <NavBtnLink to="/">Log out</NavBtnLink>
      </NavBtn>
    </Nav>
  );
}
