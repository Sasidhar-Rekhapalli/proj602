import axios from 'axios';

const auth=axios.create({
    baseURL:'http://localhost:3001/isms'

})

export const registerUser=(firstName,lastName,email,tel,username,password)=>auth.post(`/user/register`,
{first_name:firstName,last_name:lastName,email:email,tel:tel,user_name:username,password:password});
export const loginUser=(username,password)=>auth.post(`/user/login`,{username:username,password:password})
export const getUsersView=()=>auth.get(`/user/getuser`);
const auths={
    registerUser,
    loginUser,
    getUsersView
}
export default auths;