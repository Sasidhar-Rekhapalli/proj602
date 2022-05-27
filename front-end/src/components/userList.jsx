import React,{Component} from "react";

class UserList extends Component{
    render(){
        return(  
        <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">Permissions</th>
          </tr>
        </thead>
        {/* User name, role, permission */}
        <tbody>
          <tr>
            <th scope="row">Graham Burnigham</th>
            <td>Graham123</td>
            <td>Admin</td>
            <td>All</td>
          </tr>
          {/* User name, role, permission */}
          <tr>
            <th scope="row">Bill Block</th>
            <td>BillB</td>
            <td>RCIC</td>
            <td>Read,Write</td>
          </tr>
          {/* User name, role, permission */}
          <tr>
            <th scope="row">Joe Dave</th>
            <td>Joe12</td>
            <td>RISIA</td>
            <td>Read</td>
          </tr>
        </tbody>
      </table>)
    }
}
export default UserList;