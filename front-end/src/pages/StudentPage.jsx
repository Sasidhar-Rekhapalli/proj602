import { StudentList,Navbar,FootNav } from "../components";
import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import addStudent from "../images/logo.png";
import {  Card  } from "react-bootstrap";
const AddStudentButton = styled.button`
  color: #fff;
  background-color: #800080;
  border-color: #f8f6f9;
  border-radius: 5px;
  height: 50px;
  lette-spacing:0px !important  ;
  float: right;
`;

const Title = styled.h1.attrs({
  className: "h1",
})`
 text-align:center;
 margin:10px 0px;
`;

const Label = styled.label`
  font-weight: bold;
  display:inline-block;
`;

const Wrapper = styled.div.attrs({
  className: "form-group container",
})`
  padding:0px;
  text-transform: capitalize;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  display:inline-block;
  width: 400px;
`;
class StudentPage extends Component{
	render(){
		return(
			<>
            <Navbar/>
            <Card>
			<Link to="/isms/addstudent">
					<AddStudentButton className="AddStudent">
						<img
						src={addStudent}
						width="30"
						height="30"
						
						></img>{" "}
						Add New / Prospective Student
					</AddStudentButton>
					</Link>
            <StudentList/>
            </Card>
            <FootNav />
			</>
		);
	}; 

}

export default StudentPage;