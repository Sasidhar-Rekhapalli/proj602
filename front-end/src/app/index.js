import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {LoginView, RegisterUser,BriefShow, StudentPage, UserManagement} from '../pages';
import"bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    render(){
        return(
            <Router>
                    <Switch>
                    <Route exact path="/" extract component={LoginView}/>
                    <Route path="/isms/briefshow" extract component={BriefShow}/>
                    <Route path="/isms/register" extract component={RegisterUser}/>
                    <Route path="/isms/studentpage" extract component={StudentPage}/>
                    <Route path="/isms/usermanagement" extract component={UserManagement}/>
                    </Switch>
            </Router>
        )
    }
}
export default App;