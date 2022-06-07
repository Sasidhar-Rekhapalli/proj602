import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3001/isms'

})
export const createStudent = (
                                studentID,
                                firstname,
                                middlename,
                                lastname,
                                gender,
                                dayofbirth,
                                country,
                                saskemail,
                                campus,
                                period,
                                year,
                                program,
                                degree,
                                graduate,
                                enroll,
                                prospective) => api.post(`/newstudent`, {
                                "student_id": 0,
                                "prospective": prospective,
                                "std_id": studentID,
                                "first_name": firstname,
                                "middle_name": middlename,
                                "last_name": lastname,
                                "gender": gender,
                                "birthdate": dayofbirth,
                                "email": saskemail,
                                "country": country,
                                "academic_period": period,
                                "campus": campus,
                                "program": program,
                                "degree": degree,
                                "year": year,
                                "graudate_ind": graduate,
                                "enroll": enroll
                            }); 
export const getAllStudents=()=>api.get(`/getallstudent`);
export const getStudentById=id=>api.get(`/getstudent/${id}`);
export const updateStudent = (
                                studentMainID,
                                studentID,
                                firstname,
                                middlename,
                                lastname,
                                gender,
                                dayofbirth,
                                country,
                                saskemail,
                                campus,
                                period,
                                year,
                                program,
                                degree,
                                graduate,
                                enroll,
                                prospective) => api.put(`/updatestudent/${studentMainID}`, {
                                "student_id": 0,
                                "prospective": prospective,
                                "std_id": studentID,
                                "first_name": firstname,
                                "middle_name": middlename,
                                "last_name": lastname,
                                "gender": gender,
                                "birthdate": dayofbirth,
                                "email": saskemail,
                                "country": country,
                                "academic_period": period,
                                "campus": campus,
                                "program": program,
                                "degree": degree,
                                "year": year,
                                "graudate_ind": graduate,
                                "enroll": enroll
}); 
export const deleteStudent=id=>api.delete(`/deletestudent/${id}`);
export const getConversation =id=>api.get(`/getconversation/${id}`);
export const getAllUsers=()=>api.get(`/user/getuser`);
 
const apis={
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    getConversation,
    getAllUsers
}
export default apis;