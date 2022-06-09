import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3001/isms'

})

export const insertFile = () => api.post('/insertFile');

const apis = {
    insertFile
}

export default apis;