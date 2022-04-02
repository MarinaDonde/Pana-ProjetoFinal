import axios from "axios";
 
const api = axios.create({
    baseURL: "https://panaa.herokuapp.com"
})
export default api

