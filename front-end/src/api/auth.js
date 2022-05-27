import axios from 'axios';

const auth=axios.create({
    baseURL:'http://localhost:3001/isms'

})

export const registerUser=
(firstName,lastName,email,tel,username,password)=>auth.post(`/user/register`,
{firstName:firstName,lastName:lastName,email:email,tel:tel,username:username,password:password});
export const loginUser=(username,password)=>auth.post(`/user/login`,{username:username,password:password})
export const getAllUsers=()=>auth.get(`/user/getuser`);
const auths={
    registerUser,
    loginUser,
  
}
export default auths;