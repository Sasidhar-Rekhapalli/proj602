import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3001/isms/conversation'

})
export const getConversationByID=id=>api.get(`/getconversationid/${id}`)
export const getAllConversation=()=>api.get(`/getallconversation`)
export const createConversation=payload=>api.post(`/newconversation`,payload);

const apis={
    getAllConversation,
    getConversationByID,
    createConversation
}
export default apis