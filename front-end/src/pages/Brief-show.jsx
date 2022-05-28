import React,{Component} from 'react';
import apis from '../api/student';
import { ConversationList } from '../components';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Navbar,FootNav} from "../components"

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
              <Form.Control className="col"></Form.Control>
            </Form.Group>

            {/* First and Last name with input and label  */}
            <Form.Group>
              <div className="row mb-3">
                <Form.Label className="col-md-2">First name:</Form.Label>
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col-md-2">Last name:</Form.Label>
                <Form.Control className="col"></Form.Control>
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
                  />
                  <label className="form-check-label col">Male</label>
                </div>
                <div className="form-check col-lg-1">
                  <input
                    className="form-check-input col"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label col">Female</label>
                </div>
                {/* Date of Birth with input and label  */}
                <Form.Label className="col-lg-2" style={{ textAlign: "right" }}>
                  Day of Birth:
                </Form.Label>
                <Form.Control type="date" className="col pt-0"></Form.Control>
              </div>

              {/* Country input and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Country:</Form.Label>
                <Form.Control className="col"></Form.Control>
                {/* SaskPolytech email with input and label  */}
                <Form.Label className="col">Saskpolytech E-mail:</Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>

              {/* Campus Select with options and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Campus:</Form.Label>
                <Form.Select className="col">
                  <option>Select Campus</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>
                {/* Academic period with options and label  */}
                <Form.Label className="col">Academic Period:</Form.Label>
                <Form.Select className="col">
                  <option>Select Period</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>
              </div>

              {/* Year and Program with label and input  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Year:</Form.Label>
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col">Program:</Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>

              {/* Degree with options and label  */}
              <div className="row">
                <Form.Label className="col-md-2">Degree:</Form.Label>
                <Form.Select className="col">
                  <option>Select Degree</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>

                {/* Graduate Ind with label and input  */}
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Graduate Ind:
                </Form.Label>

                {/* Enroll with label and input  */}
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Enroll:
                </Form.Label>
                <Form.Control className="col"></Form.Control>
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
export default BriefShow;