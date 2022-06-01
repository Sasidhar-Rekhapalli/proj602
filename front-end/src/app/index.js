import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import {LoginView, RegisterUser,BriefShowStudent,AddNote, StudentPage, UserManagement,AddStudent,ResetPassword} from '../pages';
=======
import {LoginView, RegisterUser,BriefShow, StudentPage, UserManagement,AddStudent,ResetPassword,AddNote} from '../pages';
>>>>>>> addnotespage
import"bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    render(){
        return(
            <Router>
                    <Switch>
                    <Route exact path="/" extract component={LoginView}/>
                    <Route path={"/isms/briefshow/:id"} extract component={BriefShowStudent}/>
                    <Route path="/isms/register" extract component={RegisterUser}/>
                    <Route path="/isms/studentpage" extract component={StudentPage}/>
                    <Route path="/isms/usermanagement" extract component={UserManagement}/>
                    <Route path="/isms/addstudent" extract component={AddStudent}/>
                    <Route path="/isms/addnote" extract component={AddNote}/>
                    <Route path="/isms/resetpassword" extract component={ResetPassword}/>
                    </Switch>
            </Router>
        )
    }
}
export default App;