import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import apis from "../api/student";
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
  
class UserList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            isLoading: false,
            search:''
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
                        // this album is the data coming from api call
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
                Header: 'Role',
                accessor:'role',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>
            },       
        ]
         let showTable = true
        // if (!user.length) {
        //     showTable = false
        // }
        return(
            <Wrapper>
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
            </Wrapper>
        )
    }
}
export default UserList;