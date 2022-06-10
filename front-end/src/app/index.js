import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {LoginView, RegisterUser,BriefShowStudent,AddConversation,DetailDialog,StudentPage,UserManagement,AddStudent,ResetPassword} from '../pages';
import"bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    render(){
        return(
            <Router>
                    <Switch>
                    <Route exact path="/" extract component={LoginView}/>
                   
                    <Route path="/isms/briefshow/:id" extract component={BriefShowStudent}/>
                    
                    <Route path="/isms/register" extract component={RegisterUser}/>
                    <Route path="/isms/studentpage" extract component={StudentPage}/>
                    <Route path="/isms/usermanagement" extract component={UserManagement}/>
                    <Route path="/isms/addstudent" extract component={AddStudent}/>
                    <Route path="/isms/addnote/:id" extract component={AddConversation}/>
                    <Route path="/isms/resetpassword" extract component={ResetPassword}/>
                    <Route path="/isms/detaildialog/:id" extract component={DetailDialog}/>
                    
                    </Switch>
            </Router>
        )
    }
}
export default App;