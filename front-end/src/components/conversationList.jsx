import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";



class ConversationList extends Component{
    render(){
        return(  
            <Card className="mx-auto " style={{ width: "75%", "margin-top": "80px" }}>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Category</th>
                <th scope="col">Date Created</th>
                <th scope="col">Created By</th>
                <th scope="col">Last Updated By</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
                <tr class="results">
                    <th scope="row">Sturdy Permit</th>
                    <td>05-22-2022</td>
                    <td>Graham</td>
                    <td>Graham</td>
                    <td><Button>Details</Button></td>
                </tr>
            </tbody>
            </table>
        </Card>
    )}
}
export default ConversationList;