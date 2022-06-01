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
 
class Detail extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href=`/isms/update/${this.props.id}`
    }

    render(){
        // invike the update view for the current row -> this.props
        return <Detail onClick={this.updateUser}>Details</Detail>
    }
} 
class StudentList extends Component{
	constructor(props) {
        super(props)
        this.state = {
            student: [],
            isLoading: false,
            search:''
        }
    }
	componentDidMount = async() => {
        // turn on isLoading flag which we load data
        this.setState({isLoading:true})

        await apis.getAllStudents()
                    .then(
                        // this album is the data coming from api call
                        student => {
                            this.setState({
                                student: student.data.data,
                                // need to reference the data using syntax above right
                                // then turn isLoading off now that we're done
                                isLoading: false
                            })
                        }
                    )
    }
	render() {

        // get data from state
        const {student, isLoading} = this.state;
		
        // set up columns for the react table
        // requires Header and accessor for Column Header text and field the column is displaying
        const columns = [
			{
                Header: 'Orders',
                accessor:'student_id',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>

            },
            {
                Header: 'Student ID ',
                accessor:'std_id',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>

            },
            {
                Header: 'First name ',
                accessor:'first_name',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>

            },
            {
                Header: 'Last Name',
                accessor:'last_name',
                style: {'whiteSpace':'unset'},
                // specify a row of data to display
                Cell: row => <div style={{textAlign: "center"}}>{row.value}</div>

            },
            {
                Header: '',
                accessor: '',
                width: 100,
                Cell: function(props) {
                    return(
                        <span>
                            <Detail id={props.original._student_id} />
                        </span>
                    )
                }

            }, 

        ]

        let showTable = true
        if (!student.length) {
            showTable = false
        }

        return(

            <Wrapper>
				<Label>Search: </Label>
				<InputText
                    type="text"
					placeholder="Student ID"
                />
                {showTable && (
                    <ReactTable 
                        data={student}
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

export default StudentList