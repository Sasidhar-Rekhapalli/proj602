import React,{Component} from 'react'
import apis from '../api/student'
import conv_apis from '../api/conversation'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Form,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UploadFile from '../components/uploadFile';
import "../css/loginpage.css";


class DetailDialog extends Component{
    constructor(props) {
        super(props)
        this.state = {
            conversationID: this.props.match.params.id,
            category:'',
            permission:'',
            create:'',
            subject:'',
            note:'',
            comments:'',
            sharedLink:'',
            studentID:'',
            std_id:'',
            firstName:'',
            lastName:'',
            program:'',
            tabIndex:'',
        }
}
componentDidMount = async() => {
    // turn on isLoading flag which we load data
    const {conversationID,}=this.state

    await conv_apis.getConversationByConsID(conversationID)
                .then(
         
                    conversation => {
                        this.setState({
                            studentID: conversation.data.data[0].student_id,
                            category: conversation.data.data[0].category,
                            subject: conversation.data.data[0].subject,
                            note: conversation.data.data[0].note,
                            comments: conversation.data.data[0].comments,
                            sharedLink: conversation.data.data[0].sharedLink,
                            permission: conversation.data.data[0].permission,
                            create: conversation.data.data[0].createdby,
                           
                        })
                    } 
                )
    console.log(this.state.permission)
    console.log(this.state.create)
    await apis.getStudentById(this.state.studentID)
                    .then(
                        student=>{
                            this.setState({
                                std_id:student.data.data[0].std_id,
                                firstName: student.data.data[0].first_name,
                                lastName: student.data.data[0].last_name,
                                program: student.data.data[0].program
                            })
                        }
                    )
  
              
  }
  handleChangeNote= async event=>{
    this.setState({note:event.target.value})
  }
  handleChangeComment= async event=>{
    this.setState({comments:event.target.value})
  }
  handleSharedLink= async event=>{
    this.setState({sharedLink:event.target.value})
  }
  handleUpdate= async event=>{
    console.log(this.state.note)
    console.log(this.state.comments)
    await conv_apis.updateConversation(this.state.conversationID,this.state.note,this.state.comments,this.state.sharedLink).then(res=>{
      window.alert('Conversation Updated Successfully');
      this.props.history.push(`/isms/briefshow/${this.state.studentID}`);
    })
  }
  render(){
      return(
          <Card className='container mt-3 shadow'>
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
                    <Form.Control className="col" value={this.state.firstName}></Form.Control>
                    <Form.Label className="col-md-2">
                      Last Name:
                    </Form.Label>
                    <Form.Control className="col" value={this.state.lastName}></Form.Control>
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="row mb-3">
  
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
                    <Form.Control type="text" value={this.state.subject}
                      className="col"
                    ></Form.Control>
  
                    {/* Label with category and select options  */}
                    <Form.Label className="col-md-2">Category :</Form.Label>
                    <Form.Control type="text" value={this.state.category}
                      className="col"
                    ></Form.Control>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Card.Header>

              <Card.Body>
    {
            ((localStorage.getItem('permission')===this.state.permission) || (this.state.permission==="") 
            || (localStorage.getItem('permission')==="RISIA and RCIC") || (localStorage.getItem('permission')==="admin")) ?
                <Tabs >
                <TabList>
                <Tab>Note</Tab>
                <Tab>Shared Link</Tab>
                <Tab>Uploaded File</Tab>
                </TabList>
    
            
            <TabPanel>
            <Form.Group>
          <Form.Label className="col-md-2">Note</Form.Label>
      {
        ((localStorage.getItem('user_name')===this.state.create)) ?
        <Form.Control className="col" type="textarea" value={this.state.note} style={{"height":"100px"}} onChange={this.handleChangeNote}></Form.Control>:

        <Form.Control className="col" type="textarea" value={this.state.note} style={{"height":"100px"}} readOnly></Form.Control>	
        
      }	
      <Form.Label className="col-md-2">Comment:</Form.Label>
      {((localStorage.getItem('user_name')!==this.state.create)) ?
                <Form.Control className="col" type="textarea" value={this.state.comments} style={{"height":"100px"}} onChange={this.handleChangeComment}></Form.Control>:
                <Form.Control className="col" type="textarea" value={this.state.comments} style={{"height":"100px"}} readOnly></Form.Control>
      }
            </Form.Group>
            </TabPanel>
            <TabPanel>
                <Form.Group>
                    <Form.Label className="col-md-2">Shared Link</Form.Label>
                    <Form.Control className="col" type="textarea" value={this.state.sharedLink} style={{"height":"100px"}} onChange={this.handleSharedLink}></Form.Control>
                </Form.Group>
            </TabPanel>
            <TabPanel>
              <UploadFile />
            </TabPanel>
            </Tabs>:
            <Tabs >
            <TabList>
            <Tab>Note</Tab>
            <Tab>Shared Link</Tab>
            <Tab>Uploaded File</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            </Tabs>
  }
              </Card.Body>
          <div style={{display:"inline-block"}}>
          
            <Button
              className="btn m-3 col-md-2"
              style={{ float: "right",background:"#744197",border:"none",cursor:"pointer" }}
              onClick={this.handleUpdate}
            >
              Update
            </Button>
        
          <Link to={{pathname: `/isms/briefshow/${this.state.studentID}`}}>
            <Button
              className="btn btn-danger m-3 col-md-2"
              style={{ float: "right",cursor:"pointer" }}
            >
              Cancel
            </Button>
          </Link>
          
        
          </div>
        </Card>
      ) 
  }
}
export default DetailDialog;