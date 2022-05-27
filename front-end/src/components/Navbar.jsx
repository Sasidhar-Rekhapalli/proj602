import react,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../image/saskpolytech.jpg';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className:'container'
})`

padding :0px;
`
const Nav = styled.div.attrs({
    className:'navbar navbar-expand-lg'
})`
background-color: #8c088c;
padding:35px 0px;
`
const Heading = styled.h1.attrs({
    className:'page-header'
})`
color:white;
margin:0px 20px;
text-transform:capitalize;
`
const HeaderDown = styled.div.attrs({
    className:"navbar "
})`
background-color:grey;
padding:10px 0px;
justify-content: right !important;

`
const TextLine = styled.a.attrs({
    className:"m-3"
})`
color:white;
margin-right:10px;
text-decoration:none;
float:right;
`

function navBar(){
    return(
      <Container>
          <Nav>
            <img src={Logo} width="50px" height="50px" alt="Logo" />
            <Heading>International Student Management</Heading>
          </Nav>
          <HeaderDown>
              <TextLine href=''>Welcome Admin</TextLine>
              <TextLine href=''>Logout</TextLine>
          </HeaderDown>
      </Container>
    )
}

export default navBar;