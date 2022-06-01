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
<<<<<<< HEAD

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


=======
            <>
            <Title>Student</Title>
            
			<div style={{"display":"flex"}}>
				<Label style={{"margin":"12px"}}>Search: </Label>
            	<InputText type="text" placeholder="Student ID" />
			</div>
				<Card className="mx-auto " style={{ width: "85%", "margin": "20px" }}>
					<table className="table">
					<thead className="thead-dark">
						<tr>
						<th scope="col">Student ID</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Program</th>
						</tr>
					</thead>
					<tbody>
						<tr class="results">
							<th scope="row"><Link to={"/isms/briefshow"}>000NNNNNN</Link></th>
							<td>Kelsey</td>
							<td>Deakan</td>
							<td>Software Development</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Mireille</td>
							<td>Camplejohn</td>
							<td>Business</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Emilio</td>
							<td>Tonnesen</td>
							<td>Civil Engineering</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Barbi</td>
							<td>Minger</td>
							<td>Office Administration</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Roosevelt</td>
							<td>Olivetti</td>
							<td>Business</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Ulick</td>
							<td>Girardot</td>
							<td>Software Development</td>
						</tr>
						<tr class="results">
							<th scope="row"><Link to={"t"}>000NNNNNN</Link></th>
							<td>Merv</td>
							<td>Force</td>
							<td>Enviromental Engineering</td>
						</tr>
					</tbody>
					</table>
				</Card>
            </>
>>>>>>> addnotespage
        )
    }
}

export default StudentList