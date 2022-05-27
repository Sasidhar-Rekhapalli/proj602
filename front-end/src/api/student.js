import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3001/isms'

})
export const createStudent=payload=>api.post(`/newstudent`,payload);
export const getAllStudents=()=>api.get(`/main`);
export const getStudentById=id=>api.get(`/getstudentid/${id}`);
export const updateStudent=(id,payload)=>api.put(`/updatestudent/${id}`,payload);
export const deleteStudent=id=>api.delete(`/deletestudent/${id}`);
export const getConversationByID=id=>api.get(`/getconversationid/${id}`)
export const getAllConversation=()=>api.get(`/conversations`)

const apis={
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
}
export default apis;