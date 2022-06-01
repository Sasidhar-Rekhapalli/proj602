import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3001/isms'

})
export const createStudent=payload=>api.post(`/newstudent`,payload);
export const getAllStudents=()=>api.get(`/getallstudent`);
export const getStudentById=id=>api.get(`/getstudent/${id}`);
export const updateStudent=(id,payload)=>api.put(`/updatestudent/${id}`,payload);
export const deleteStudent=id=>api.delete(`/deletestudent/${id}`);
 
const apis={
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
}
export default apis;