import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import FootNav from "../components/FootNav";
import { Link } from "react-router-dom";
import apis from '../api/student';
import conv_apis from "../api/conversation";
import  UploadFile  from "../components/uploadFile";
// Styled component for card title
const Header = styled.h2`
  margin: 0px 20px;
  text-align:center;
  display: inline-block;
`;
// class Cancel extends Component {
//   comebackStudent = event => {
//       event.preventDefault()
//       // console.log(this.props.id)
//       window.location.href=`/isms/briefshow/${this.props.id}`
//   }

//   render(){
//       // invike the update view for the current row -> this.props
//       return <Button className="btn btn-danger m-3 col-md-2"
//       style={{ float: "right",cursor:"pointer" }} onClick={this.comebackStudent}>Cancel</Button>
//   }
// }
class AddConversation extends Component{
  constructor(props){
    super(props)
    this.state={
      student_id:this.props.match.params.id,
      std_id:'',
      firstname:'',
      lastname:'',
      email:'',
      program:'',
      subject:'',
      category:'',
      note:'',
      comments:'',
      sharedLink:'',
      UploadedFile:'',
      permission:'',
      created:localStorage.getItem('user_name')
    }
  }
  componentDidMount = async() => {
    // turn on isLoading flag which we load data
    const {student_id}=this.state

    await apis.getStudentById(student_id)
                .then(
                  student=>{
                    this.setState({
            student:student.data.data,
            std_id: student.data.data[0].std_id,
            firstname: student.data.data[0].first_name,
            lastname: student.data.data[0].last_name,
            email: student.data.data[0].email,
            program:student.data.data[0].program,
                    })
                  }
                )
  }
  handleNote= async event=>{
    this.setState({note:event.target.value})
  }
  handleComment= async event=>{
    this.setState({comments:event.target.value})
  }
  handleCategory= async event=>{
    this.setState({category:event.target.value})
  }
  handleSubject= async event=>{
    this.setState({subject:event.target.value})
  }
  handlePermission= async event=>{
    this.setState({permission:event.target.value})
  }
  handleLink= async event=>{
    this.setState({sharedLink:event.target.value})
  }
  handleUpdate= async event=>{
    var values = [
        this.state.student_id,
        this.state.note,
        this.state.category,
        this.state.subject,
        this.state.sharedFile,
        this.state.permission,
        this.state.created,
        this.state.comments
    ];
    console.log(values)
    await conv_apis.createConversation(this.state.student_id,this.state.note,this.state.category,this.state.subject,this.state.sharedLink,this.state.permission,this.state.created,this.state.comments)
    window.alert('User added successfully')
    window.location.href=`/isms/briefshow/${this.state.student_id}` 
    
}
  render(){
    
    return (
      
      <div className="container">
        <NavBar/>
        <div className="row mb-3">
          <div className="col-sm-12 col-12">
            {/* Card Title  */}
            <Header className="">Add Notes</Header>
          </div>
        </div>
        {/* Card for form  */}
        <Card className="m-3">
          <Card.Header>
            <div className="col-md-12">
              {/* Form  */}
              <Form className="m-3">
                <Form.Group>
                  <div className="row mb-3">
                    {/* Label for student Id and input  */}
                    <Form.Label className="col-md-2">Student ID:</Form.Label>
                    <Form.Control className="col" value={this.state.std_id}></Form.Control>
  
                    {/* Label with student name and input  */}
                    <Form.Label className="col-md-2">
                      First Name:
                    </Form.Label>
                    <Form.Control className="col" value={this.state.firstname}></Form.Control>
                    <Form.Label className="col-md-2">
                      Last Name:
                    </Form.Label>
                    <Form.Control className="col" value={this.state.lastname}></Form.Control>
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="row mb-3">
                    {/* Label for student Id and input  */}
                    <Form.Label className="col-md-2">Email:</Form.Label>
                    <Form.Control className="col" value={this.state.email}></Form.Control>
  
                    {/* Label with student name and input  */}
                    <Form.Label className="col-md-2">
                      Program:
                    </Form.Label>
                    <Form.Control className="col" value={this.state.program}></Form.Control>
                  </div>
                </Form.Group>
  
                {/* Label with subject and input  */}
                <Form.Group>
                  <div className="row mb-3">
                    <Form.Label className="col-md-2">Subject : </Form.Label>
                    <Form.Control type="text" onChange={this.handleSubject}
                      className="col"
                    ></Form.Control>
  
                    {/* Label with category and select options  */}
                    <Form.Label className="col-md-2">Category :</Form.Label>
                    <Form.Control type="text" onChange={this.handleCategory}
                      className="col"
                    ></Form.Control>
                    </div>
                    <Form.Label className="row mb-3">License Requirement :</Form.Label>
                    <Form.Select className="col-md-2" onChange={this.handlePermission}>
                    {<option value={""}>NO SELECTION</option>}
                    {localStorage.getItem('permission')==="RISIA"&&<option value={"RISIA"}>RISIA</option>}
                    {localStorage.getItem('permission')==="RCIC"&&<option value={"RCIC"}>RCIC</option>}
                    {localStorage.getItem('permission')==="RISIA and RCIC"&&<option value={"RISIA and RCIC"}>RCIC and RISIA</option>}
                    {<option value={""}>No Certification</option>}
                    </Form.Select>
                  
                </Form.Group>
              </Form>
            </div>
          </Card.Header>
          <Card.Body>
          <Tabs >
                <TabList>
                <Tab>Note</Tab>
                <Tab>Shared Link</Tab>
                <Tab>Uploaded File</Tab>
                </TabList>
                <TabPanel>
                <Form.Group>
                    <Form.Label className="col-md-2">Note</Form.Label>
                    <Form.Control className="col" type="textarea" value={this.state.note} onChange={this.handleNote}></Form.Control>
                    
                    <Form.Label className="col-md-2">
                      Comment:
                    </Form.Label>
                    <Form.Control className="col" type="textarea" onChange={this.handleComment}></Form.Control>
                </Form.Group>
                </TabPanel>
                <TabPanel>
                    <Form.Label className="col-md-2">Shared Link</Form.Label>
                    <Form.Control className="col" type="textarea" value={this.state.sharedLink}  onChange={this.handleLink}></Form.Control>
                </TabPanel>
                <TabPanel>
                  
                </TabPanel>
                    </Tabs>
          </Card.Body>
          
          {/* Update the notes for specific student  */}
          <div style={{display:"inline-block"}}>
          
            <Button
              className="btn m-3 col-md-2"
              style={{ float: "right",background:"#744197",border:"none",cursor:"pointer" }}
              onClick={this.handleUpdate}
            >
              Create
            </Button>
        
          <Link to={{pathname: `/isms/briefshow/${this.state.student_id}`}}>
            <Button
              className="btn btn-danger m-3 col-md-2"
              style={{ float: "right",cursor:"pointer" }}
            >
              Cancel
            </Button>
          </Link>
          
        
          </div>
        </Card>
        <FootNav/>
      </div>
    );
  }
}
// function component
export default AddConversation