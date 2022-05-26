import react,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../image/logo.png';
import '../css/loginpage.css';

function Login() {

  const [password,setpassword] =useState("");
  const [username, setusername] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [usernameError, setusernameError] = useState("");

  const validationHandler =(event) =>{
    let allvalid= true;

    if(!username.match(/^[a-zA-Z]{6,12}$/)){
      allvalid = false;
      setusernameError("Username must be size between 8 to 12");
      return false;
    } else{
      setusernameError("");
      allvalid=true;
    } 

    if(!password.match(/^[a-zA-Z]{8,40}$/)){
      allvalid = false;
      setpasswordError("Incorrect password");
      return false;
    } else{
      setpasswordError("");
      allvalid=true;
    }
    return allvalid;
  };

  const loginSubmit =(e)=>{
    e.preventDefault();
    validationHandler();
  };

  return (
    <div className='LoginPage'>
      <div className=' mainBorder container'>
        <div className='left col-lg-4'>
          <img src={Logo} width="300px" height="300px" alt="Logo" />
         </div>
        <div className='right col-lg-8'>
            <div className='justify-content-center'>
                <h2>Login</h2>
                <div className='formborder col-md-6'>
                <form id='loginform' onSubmit={loginSubmit}>
                    <div className='form-group'>
                        <label><span><img src={Logo} width="30px" height="30px" alt="Logo" /></span>User name : </label>
                        <input type="text" className="form-control" placeholder='User Name' onChange={(event)=>setusername(event.target.value)}/>
                        <p>{usernameError}</p>
                    </div>
                    <div className='form-group'>
                    <label>Password : </label>
                    <input type="password" className="form-control" placeholder='Password' onChange={(event)=>setpassword(event.target.value)}/>
                    <p>{passwordError}</p>
                </div>
                <div className='form-group form-check'>
                    <button type='submit' className='btn btn-primary' onClick="www.google.com">Login</button>
                    <a href=''> | Reset Password</a>
                </div>
          </form>
          </div>
        </div>
      </div> 
      </div>    
    </div>
  )
 }

export default Login;

