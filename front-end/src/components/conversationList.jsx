import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
<<<<<<< HEAD
import conv_apis from '../api/conversation';
=======
import apis from '../api/student';
>>>>>>> 04ff3233d1f2ba4c06c99f40773bf89ef4e2f6fa
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';

const Wrapper = styled.div`padding: 0 40px 40px 40px;`

class ConversationList extends Component{
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
            id:this.props.match.params.id,
=======
>>>>>>> 04ff3233d1f2ba4c06c99f40773bf89ef4e2f6fa
            conversation:[],
            isLoading:false
        }
    }

    componentDidMount = async() => {
        // turn on isLoading flag which we load data
        this.setState({isLoading:true})
<<<<<<< HEAD
        const {id} = this.state;
      
        await conv_apis.getConversationByID(id)
=======
      
        await apis.getConversation()
>>>>>>> 04ff3233d1f2ba4c06c99f40773bf89ef4e2f6fa
                    .then(
                        // this album is the data coming from api call
                        conversation => {
                            this.setState({
                                conversation: conversation.data.data,
                                // need to reference the data using syntax above right
                                // then turn isLoading off now that we're done
                                isLoading: false
                            })
                        }
                    )
      }

    render(){
        const {conversation, isLoading} = this.state;
        const columns  = [
            {
                Header: 'Category',
                accessor: 'category',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
<<<<<<< HEAD
                Header: 'Subject',
                accessor: 'subject',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
                Header: 'Date created',
                accessor: 'datecreated',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
=======
                Header: 'Date Created',
                accessor: 'datecreated',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value.substring(0, 10)}</div>
>>>>>>> 04ff3233d1f2ba4c06c99f40773bf89ef4e2f6fa
            },
            {
                Header: 'Created By',
                accessor: 'createdby',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
                Header: 'Last Updated',
                accessor: 'lastupdatedby',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },
            {
                Header: '',
                accessor: '',
                width: 100,
                Cell: row => <div style={{textAlign: "center"}}>Details</div>
            }       
        ]

        let showTable = true;
        if(!conversation.length){
            showTable = false;
        }
        return(  
            <Card className="mx-auto " style={{ width: "75%", "margin-top": "80px" }}>
                <Wrapper>
                {showTable && (
                    <ReactTable 
                    data={conversation}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                    />
                )}
                </Wrapper>
            </Card>
    )}
}
export default ConversationList;