import React,{Component} from 'react';
import apis from '../api/student';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'
import { Form, Card, Button, Nav, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";


//import apis from '../api';


// main form container
const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
margin: 0 30px;
`
// label and text input objects
const Label = styled.div.attrs({
    className: 'form-label'
})``

const InputText = styled.input.attrs({
    className: 'form-control'
})`
margin: 5px;
`
class BriefShow extends Component{
    //Create the form loaded student info into apporiate box
    constructor(props) {
        
        super(props)
        this.state = {
            id: this.props.match.params.id,
            studentID: '',
            firstname: '',
            lastname: '',
            gender: '',
            dayofbirth:'',
            country:'',
            saskemail:'',
            campus:'',
            period:'',
            year:'',
            program:'',
            degree:'',
            graduate:'',
            enroll:'',
            prospective:false
        }
        
    }
    componentDidMount = async () => {
        const {id} = this.state;
        const student = await apis.getStudentById(id);

        // use api call to retrieve doccument here
        this.setState({ // once an album is returned, set the fields to it
            studentID: student.data.data.student_id,
            firstname: student.data.data.first_name,
            lastname: student.data.data.last_name,
            dayofbirth: student.data.data.birthdate,
            saskemail: student.data.data.email,
            gender: student.data.data.gender,
            country: student.data.data.country,
            program:student.data.data.program,
            period: student.data.data.academic_period,
            campus: student.data.data.campus,
            degree: student.data.data.degree,
            year: student.data.data.year,
            graduate: student.data.data.graudate_ind,
            enroll: student.data.data.enroll,
        });
    }
    render(){
        
       

        return(
            <div>
            <Wrapper> 
                <Row xs="auto">
                    <Col>
                    <Label>Student ID</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={"000NNNN"}
                            readOnly />
                    </Col>
                    <Col>
                    <Label>Prospective Student </Label>
                    </Col>
                    <Col>
                    <input
                            name="Prospective Student"
                            type="checkbox"
                            checked={this.state.prospective}
                            readOnly
                            />
                    </Col>
                </Row>
                <Row xs="auto">
                    <Col>
                    <Label>First name</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.firstname}
                            readOnly
                             />
                    </Col>
                    <Col>
                    <Label>Last name</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.lastname}
                            readOnly
                             />
                    </Col>
                    <Col>
                    <Label>Gender</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.gender}
                            readOnly
                             />
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                    <Label>Day of Birth</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.dayofbirth}
                            readOnly
                             />
                    </Col>
                    <Col xs="auto">
                    <Label >Country</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.country}
                            readOnly
                             />
                    </Col>
                </Row>
                <Row >
                    <Col xs="auto">
                    <Label>Saskpolytech email</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="email"
                            value={this.state.saskemail}
                            readOnly
                             />
                    </Col>
                </Row>
                <Row xs="auto">
                    <Col>
                    <Label>Campus</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.campus}
                            readOnly
                             />
                    </Col>
                    <Col>
                    <Label>Academic Period</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.period}
                            readOnly
                             />
                    </Col>
                    <Col>
                    <Label>Year</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="year"
                            value={this.state.year}
                            readOnly
                             />
                    </Col>
                </Row>

                <Row>
                    <Col xs="auto">
                    <Label>Program</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.program}
                            readOnly
                             />
                    </Col>
                    <Col xs="auto">
                    <Label >Degree</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.degree}
                            readOnly
                             />
                    </Col>
                </Row>
          
                <Row xs="auto">
                    <Col >
                    <Label>Graduate</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.graduate}
                            readOnly
                             />
                    </Col>
                    <Col>
                    <Label >Enroll</Label>
                    </Col>
                    <Col>
                    <InputText
                            type="text"
                            value={this.state.enroll}
                            readOnly
                             />
                    </Col>
                </Row>
            </Wrapper>
            
				<Card className="mx-auto " style={{ width: "75%", "margin-top": "80px" }}>
					<table className="table">
					<thead className="thead-dark">
						<tr>
						<th scope="col">Category</th>
						<th scope="col">Date Created</th>
						<th scope="col">Created By</th>
						<th scope="col">Last Updated By</th>
                        <th scope="col">Details</th>
						</tr>
					</thead>
					<tbody>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
						<tr class="results">
							<th scope="row">Sturdy Permit</th>
							<td>05-22-2022</td>
							<td>Graham</td>
							<td>Graham</td>
                            <td><Button>Details</Button></td>
						</tr>
					</tbody>
					</table>
				</Card>
            </div>
             
        
        )
    }
}
export default BriefShow;