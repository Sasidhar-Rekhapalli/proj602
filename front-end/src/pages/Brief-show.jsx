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
       await apis.getStudentById(id)
                .then(
                  student=>{
                    this.setState({
            student:student.data.data,
            studentID: student.data.data[0].std_id,
            firstname: student.data.data[0].first_name,
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
          console.log(this.state.student);
          console.log(this.state.studentID);
          console.log(this.state.firstname);
          console.log(id)
        // use api call to retrieve doccument here
     
    }
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
              <Form.Control className="col" value={this.state.studentID}></Form.Control>
            </Form.Group>

            {/* First and Last name with input and label  */}
            <Form.Group>
              <div className="row mb-3">
                <Form.Label className="col-md-2">First name:</Form.Label>
                <Form.Control className="col" value={this.state.firstname}></Form.Control>
                <Form.Label className="col-md-2" >Last name:</Form.Label>
                <Form.Control className="col" value={this.state.lastname}></Form.Control>
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
                  />
                  <label className="form-check-label col">Female</label>
                </div>
                {/* Date of Birth with input and label  */}
                <Form.Label className="col-lg-2" style={{ textAlign: "right" }}>
                  Day of Birth:
                </Form.Label>
                <Form.Control type="text" className="col pt-0" value={this.state.dayofbirth}></Form.Control>
              </div>

              {/* Country input and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Country:</Form.Label>
                <Form.Control className="col" value={this.state.country}></Form.Control>
                {/* SaskPolytech email with input and label  */}
                <Form.Label className="col">Saskpolytech E-mail:</Form.Label>
                <Form.Control type="email" className="col" value={this.state.saskemail}></Form.Control>
              </div>

              {/* Campus Select with options and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Campus:</Form.Label>
                <Form.Select className="col">
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
                <Form.Control type="text" className="col" value={this.state.period}></Form.Control>
                  
              </div>

              {/* Year and Program with label and input  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Year:</Form.Label>
                <Form.Control type="text" className="col" value={this.state.year}></Form.Control>
                <Form.Label className="col">Program:</Form.Label>
                <Form.Control type="text" className="col" value={this.state.program}></Form.Control>
              </div>

              {/* Degree with options and label  */}
              <div className="row">
                <Form.Label className="col-md-2">Degree:</Form.Label>
                <Form.Select className="col" aria-readonly >
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
                <Form.Control type="text" className="col" value={this.state.graduate}></Form.Control>
                {/* Enroll with label and input  */}
              
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Enroll:
                </Form.Label>
                <Form.Control type="text" className="col" value={this.state.enroll}></Form.Control>
              </div>
            </Form.Group>
          </Form>

          {/* Link to go to student page  */}
          <Link to="/isms/studentpage">
            {/* Button to save new student  */}
            <Button className="btn btn-primary mt-3" style={{ float: "right" }}>
              Add New Conversation
            </Button>
          </Link>
          <ConversationList/>
        </Card.Body>
      </Card>
      
      <FootNav/>
    </>
    )}
}
export default BriefShowStudent;