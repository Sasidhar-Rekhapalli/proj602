import auths from "../api/auth";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/saskpolytechlogo.png";
import "../css/loginpage.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: "",
      loginPassword: "",
      loginStatus: "",
      permission:""
    };
  }
  
  handleInputUser = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "Username must be size between 8 to 12" });
    } else {
      this.setState({ isValid: "" });
      this.setState({ loginUsername: event.target.value });
    }
  };
  handleInputPassword = async (event) => {
    if (!event.target.value.match(/^[a-zA-Z]|\d$/)) {
      this.setState({ isValid: "" });
    } else {
      this.setState({ loginPassword: event.target.value });
    }
  };
  handleLogin = async (event) => {
    event.preventDefault();
    const { loginUsername, loginPassword } = this.state;
    await auths
      .postUserLogin({ loginUsername, loginPassword })
      .then((response) => {
        if (response.data.message) {
          this.setState({ loginStatus: response.data.message });
          console.log("Unsuccessful");
          window.alert("Wrong Credentials");
        } else {
          this.setState({ loginStatus: response.data[0] });
          console.log("Successful");
          alert("Successful");
          this.setState({permission:response.data.data})
          localStorage.setItem('permission',this.state.permission)
          localStorage.setItem('user_name',this.state.loginUsername)

          this.props.history.push("/isms/studentpage");

        }
      });
  };
  render() {
    return (
      <div className="LoginPage">
        <div className=" shadowshade mainBorder container">
          <div className="left col-lg-4">
            <img src={Logo} width="300px" height="300px" alt="Logo" />
          </div>
          <div className="right col-lg-8">
            <div className="justify-content-center">
              <h2>Login</h2>
              <div className="shadowshade formborder col-md-6 ">
                <div id="loginform">
                  <div className="form-group">
                    <label>
                      {/* <span>
                        <img src={Logo} width="30px" height="30px" alt="Logo" />
                      </span> */}
                      User name :{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      onChange={this.handleInputUser}
                    />
                    <p>{this.state.isValid}</p>
                  </div>
                  <div className="form-group">
                    <label>Password : </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.handleInputPassword}
                    />
                    <p>{this.state.isValid}</p>
                  </div>
                  <div className="form-group form-check floatbtn">
                    <button
                      className="btn btn-primary"
                      onClick={this.handleLogin}
                    >
                      Login
                    </button>
                    <a href="/isms/resetpassword"> | Reset Password</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
