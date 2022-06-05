import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import apis from '../api/student';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';

const Wrapper = styled.div`padding: 0 40px 40px 40px;`

class ConversationList extends Component{
    constructor(props){
        super(props);
        this.state = {
            conversation:[],
            isLoading:false
        }
    }

    componentDidMount = async() => {
        // turn on isLoading flag which we load data
        this.setState({isLoading:true})
      
        await apis.getConversation()
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
                Header: 'Date Created',
                accessor: 'datecreated',
                style: {'whiteSpace':'unset'},
                Cell: row => <div style={{textAlign: "center"}}>{row.value.substring(0, 10)}</div>
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