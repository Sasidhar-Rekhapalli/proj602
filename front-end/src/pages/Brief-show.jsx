import React,{Component} from 'react';
import apis from '../api/student';
import { ConversationList } from '../components';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Navbar,FootNav} from "../components"
import { format } from 'date-fns';

class BriefShowStudent extends Component{
    //Create the form loaded student info into apporiate box
    constructor(props) {
        
        super(props)
        this.state = {
            id: this.props.match.params.id,
            student:[],
            studentID: '',
            firstname: '',
            middlename: '',
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

    handleValidatedStudentID = async event => {
      if(!event.target.value.match(/^[a-zA-Z]|\d$/)){
        this.setState({isValid:"Student ID must be size between 8 to 12"});
      }else{
        this.setState({isValid:""});
        this.setState({studentID:event.target.value});
      }
    }

    handleValidatedFirstName = async event => {
      if(!event.target.value.match(/^[a-zA-Z]|\d$/)){
        this.setState({isValid:"First Name must be size between 8 to 12"});
      }else{
        this.setState({isValid:""});
        this.setState({firstname:event.target.value});
      }
    }

    handleValidatedMiddleName = async event => {
      if(!event.target.value.match(/^[a-zA-Z]|\d$/)){
        this.setState({isValid:"Middle Name must be size between 8 to 12"});
      }else{
        this.setState({isValid:""});
        this.setState({middlename:event.target.value});
      }
    }

    handleValidatedLastName = async event => {
      if(!event.target.value.match(/^[a-zA-Z]|\d$/)){
        this.setState({isValid:"Last Name must be size between 8 to 12"});
      }else{
        this.setState({isValid:""});
        this.setState({lastname:event.target.value});
      }
    }

    handleValidatedDayOfBirth = async event => {
      this.setState({dayofbirth:event.target.value});
    }

    handleValidatedCountry = async event => {
      this.setState({country:event.target.value});
    }

    handleValidatedEmail = async event => {
      if(!event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/)){
        this.setState({isValid:"Verify Email"});
      }else{
        this.setState({isValid:""});
        this.setState({saskemail:event.target.value});
      }
    }

    handleValidatedCampus = async event => {
      this.setState({campus:event.target.value});
    }

    handleValidatedPeriod = async event => {
      this.setState({period:event.target.value});
    }

    handleValidatedYear = async event => {
      this.setState({year:event.target.value});
    }

    handleValidatedProgram = async event => {
      this.setState({program:event.target.value});
    }

    handleValidatedDegree = async event => {
      this.setState({degree:event.target.value});
    }

    handleValidatedGraduate = async event => {
      this.setState({graduate:event.target.value});
    }

    handleValidatedEnroll = async event => {
      this.setState({enroll:event.target.value});
    }

    handleGenderMale = async event => {
      this.setState({gender:'M'});
    }
    handleGenderFemale = async event => {
      this.setState({gender:'F'});
    }
    handleGenderNone = async event => {
      this.setState({gender:'N'});
    }

    handleProspectiveStudent = async event => {
      this.setState({prospective:true});
    }
    
    handleUpdateStudent = async event => {
      await apis.updateStudent(
                                this.state.studentMainID,
                                this.state.studentID,
                                this.state.firstname,
                                this.state.middlename,
                                this.state.lastname,
                                this.state.gender,
                                this.state.dayofbirth,
                                this.state.country,
                                this.state.saskemail,
                                this.state.campus,
                                this.state.period,
                                this.state.year,
                                this.state.program,
                                this.state.degree,
                                this.state.graduate,
                                this.state.enroll,
                                this.state.prospective
        ).then(response =>{});
        window.alert("Student updated successfully");
        this.props.history.push('/isms/studentpage');  
    }

    componentDidMount = async () => {
        const {id} = this.state;
       await apis.getStudentById(id)
                .then(
                  student=>{
                    this.setState({
            student:student.data.data,
            studentMainID: student.data.data[0].student_id,
            studentID: student.data.data[0].std_id,
            firstname: student.data.data[0].first_name,
            firstname: student.data.data[0].middle_name,
            lastname: student.data.data[0].last_name,
            dayofbirth: student.data.data[0].birthdate,
            saskemail: student.data.data[0].email,
            gender: student.data.data[0].gender,
            country: student.data.data[0].country,
            program:student.data.data[0].program,
            period: student.data.data[0].academic_period,
            campus: student.data.data[0].campus,
            degree: student.data.data[0].degree,
            year: student.data.data[0].year,
            graduate: student.data.data[0].graudate_ind,
            enroll: student.data.data[0].enroll,
                    })
                  }
                )
          
        // use api call to retrieve doccument here
     
    }
    handleAddNote
    render(){
      
         return(
    <>
        <Navbar/>
      {/* Card with title */}
      <Card.Title className="mt-3 mb-3 text-center">Student Conversation</Card.Title>
      {/* Card */}
      <Card className="mx-auto container" >
        <Card.Body style={{ padding: "1rem 2rem" }}>
          {/* Form  */}
          <Form>
            <Form.Group className="row mb-3">
              {/* Student ID label with input  */}
              <Form.Label className="col-md-2">
                Student ID:
              </Form.Label>
              <Form.Control className="col" value={this.state.studentID} onChange={this.handleValidatedStudentID}></Form.Control>
            </Form.Group>

            {/* First and Last name with input and label  */}
            <Form.Group>
              <div className="row mb-3">
                <Form.Label className="col-md-2">First name:</Form.Label>
                <Form.Control className="col" value={this.state.firstname} onChange={this.handleValidatedFirstName}></Form.Control>
                <Form.Label className="col-md-2">Middle name:</Form.Label>
                <Form.Control className="col" value={this.state.middlename} onChange={this.handleValidatedMiddleName}></Form.Control>
                <Form.Label className="col-md-2" >Last name:</Form.Label>
                <Form.Control className="col" value={this.state.lastname} onChage={this.handleValidatedLastName}></Form.Control>
              </div>

              {/* Check box for Gender  */}
              <div className="row mb-3">
                <Form.Label className="col-lg-2">Gender:</Form.Label>
                <div className="form-check col-lg-1">
                  <input
                    className="form-check-input col"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="Male"
                    checked={this.state.gender==="M"}
                    onChange={this.handleGenderMale}
                  />
                  <label className="form-check-label col">Male</label>
                </div>
                <div className="form-check col-lg-1">
                  <input
                    className="form-check-input col"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Female"
                    checked={this.state.gender==="F"}
                    onChange={this.handleGenderFemale}
                  />
                  <label className="form-check-label col">Female</label>
                </div>
                {/* Date of Birth with input and label  */}
                <Form.Label className="col-lg-2" style={{ textAlign: "right" }}>
                  Day of Birth:
                </Form.Label>
                <Form.Control type="text" className="col pt-0" value={this.state.dayofbirth.substring(0,10)} onChange={this.handleValidatedDayOfBirth}></Form.Control>

              </div>

              {/* Country input and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Country:</Form.Label>
                <Form.Control className="col" value={this.state.country} onChange={this.handleValidatedCountry}></Form.Control>
                {/* SaskPolytech email with input and label  */}
                <Form.Label className="col">Saskpolytech E-mail:</Form.Label>
                <Form.Control type="email" className="col" value={this.state.saskemail} onChange={this.handleValidatedEmail}></Form.Control>
              </div>

              {/* Campus Select with options and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Campus:</Form.Label>
                <Form.Select className="col" onChange={this.handleValidatedCampus}>
                  <option 
                  value="Moose Jaw"
                  checked={this.state.gender==="Moose Jaw"}>Moose Jaw</option>
                  <option 
                  value="Saskatoon"
                  checked={this.state.gender==="Saskatoon"}>Saskatoon</option>
                  <option 
                  value="Regina"
                  checked={this.state.gender==="Regina"}>Regina</option>
                  <option 
                  value="Prince Albert"
                  checked={this.state.gender==="Prince Albert"}>Prince Albert</option>
                </Form.Select>
                {/* Academic period with options and label  */}
                <Form.Label className="col">Academic Period:</Form.Label>
                <Form.Control type="text" className="col" value={this.state.period} onChange={this.handleValidatedPeriod}></Form.Control>
                  
              </div>

              {/* Year and Program with label and input  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Year:</Form.Label>
                <Form.Control type="text" className="col" value={this.state.year} onChange={this.handleValidatedYear}></Form.Control>
                <Form.Label className="col">Program:</Form.Label>
                <Form.Control type="text" className="col" value={this.state.program} onChange={this.handleValidatedProgram}></Form.Control>
              </div>

              {/* Degree with options and label  */}
              <div className="row">
                <Form.Label className="col-md-2">Degree:</Form.Label>
                <Form.Select className="col" aria-readonly onChange={this.handleValidatedDegree}>
                <option 
                  value="DIPC"
                  checked={this.state.degree==="DIPC"}>DIPC</option>
                  <option 
                  value="PGCERT"
                  checked={this.state.gender==="PGCERT"}>PGCERT</option>
                  <option 
                  value="CERT"
                  checked={this.state.gender==="CERT"}>CERT</option>
                  
                </Form.Select>

                {/* Graduate Ind with label and input  */}
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Graduate Ind:
                </Form.Label>
                <Form.Control type="text" className="col" value={this.state.graduate} onChange={this.handleValidatedGraduate}></Form.Control>
                {/* Enroll with label and input  */}
              
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Enroll:
                </Form.Label>
                <Form.Control type="text" className="col" value={this.state.enroll} onChange={this.handleValidatedEnroll}></Form.Control>
              </div>
            </Form.Group>
          </Form>

          {/* Link to go to student page  */}
          <Link to="/isms/addnote/id">
            {/* Button to save new student  */}
            <Button className="btn btn-primary mt-3" style={{ float: "right" }}>
              Add New Conversation
            </Button>
          </Link>
          {/* Link to go to student page  */}
            {/* Button to save new student  */}
            <Button className="btn btn-primary mt-3" style={{ float: "right" }} onClick={this.handleUpdateStudent}>
              Update Student
            </Button>
          <ConversationList/>
        </Card.Body>
      </Card>
      
      <FootNav/>
    </>
    )}
}
export default BriefShowStudent;