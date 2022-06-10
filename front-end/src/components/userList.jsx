//////////////////////////////////////               UserList.jsx                //////////////////////////////////////
/**
 *
 * @file UserList.jsx
 * @copyright ISMS(International Student Management System)
 * @version 3.0.0
 * @author cyberbot team, software developer program
 * @release summer 2022
 * @owner Saskatchewan Polytechnic, Saskatoon Campus
 *
 */
//////////////////////////////////////
import React, { Component } from "react";
import { Button, Form,Card } from "react-bootstrap";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import apis from "../api/student";
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components';

const Detail = styled.div`
    color: #0000ff;
    cursor: pointer;
`
// Details section to call the update role functionality
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            permission:''
        }
    }
  //Update role/Permission  
handleClose= async event=>{
        this.setState({showModal:false})
        await apis.updatePermission(this.props.id,this.state.permission).then(
            window.alert("Permission is updated!!")
            
        )
        window.location.reload();
    }
handlePermission= async event=>{
        this.setState({permission:event.target.value})
    }
     
handleModal = event => {
      event.preventDefault()
      this.setState({showModal:true,permission:this.props.permission})
      
      console.log(this.props.id)
      console.log(this.props.permission)
      
    //   window.location.href=`/isms/detaildialog/${this.props.id}`
  }
  render(){
      return(
    <>
    <Modal show={this.state.showModal} onHide={this.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {/* Drop box with different permissions */}
    <Form.Select className="mb-3 col-md-auto" onChange={this.handlePermission}>
                  <option>Select permission</option>
                  <option value="RISIA">RISIA</option>
                  <option value="RCIC">RCIC</option>
                  <option value="RISIA and RCIC">RCIC and RISIA</option>
                  <option value="admin">admin</option>
                  <option value="No Certification">No Certification</option>
                </Form.Select>
    </Modal.Body>
    <Modal.Footer>
        {/* Close button to close the popup */}
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
      {/* Save button to update the changes */}
      <Button variant="primary" onClick={this.handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
    </Modal>
    {/* Details link */}
    <Detail onClick={this.handleModal}>Details</Detail>
    </>
    )
    
}
}
// UserList class to do the functionality of user management
class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoading: false,
            search:'',
        }
    }


    componentDidMount = async() => {
        // turn on isLoading flag which we load data
        this.setState({isLoading:true})
        await apis.getAllUsers()
                    .then((response)=>{
                            this.setState({
                                user: response.data.data,
                                // need to reference the data using syntax above right
                                // then turn isLoading off now that we're done
                                isLoading: false
                            })
                    })
                        // this user is the data coming from api call
        console.log(this.state.user)
    }
    render() {
        // get data from state
        const {user, isLoading} = this.state;
        // set up columns for the react table
        // requires Header and accessor for Column Header text and field the column is displaying
        const columns = [
            {
                Header: 'Name',
                accessor:'first_name',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
                Header: 'Username',
                accessor:'user_name',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
                Header: 'Permission',
                accessor:'permission',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },   
            {
                Header: '',
                accessor: '',
                Cell: function(props){
                   
                    return(
                        <span>
                        <Details id={props.original.user_id} permission={props.original.permission} />
                        </span>
                        
                    )
                }
                 
            }     
        ]
         let showTable = true
        // if (!user.length) {
        //     showTable = false
        // }
        return(
            <>
     
     <Card className="mx-auto " style={{ width: "100%", "margin-top": "40px" }}>
                {showTable && (
                    <ReactTable
                        data={user}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
    </Card>
            </>
        )
    }
}
export default UserList;