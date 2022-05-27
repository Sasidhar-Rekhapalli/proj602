import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
class StudentList extends Component{
    render(){
        return(
            <>
            
            <Title>Student</Title>
            <Label>Search: </Label>
            <InputText type="text" placeholder="Student ID" />
				<Card className="mx-auto " style={{ width: "75%", "margin-top": "80px" }}>
					<table className="table">
					<thead className="thead-dark">
						<tr>
						<th scope="col">Student ID</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Program</th>
						</tr>
					</thead>
					<tbody>
						<tr class="results">
							<th scope="row"><Link to={"/isms/briefshow"}>000NNNNNN</Link></th>
							<td>Kelsey</td>
							<td>Deakan</td>
							<td>Software Development</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Mireille</td>
							<td>Camplejohn</td>
							<td>Business</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Emilio</td>
							<td>Tonnesen</td>
							<td>Civil Engineering</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Barbi</td>
							<td>Minger</td>
							<td>Office Administration</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Roosevelt</td>
							<td>Olivetti</td>
							<td>Business</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Ulick</td>
							<td>Girardot</td>
							<td>Software Development</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Merv</td>
							<td>Force</td>
							<td>Enviromental Engineering</td>
						</tr>
					</tbody>
					</table>
				</Card>
            </>
        )
    }
}
export default StudentList