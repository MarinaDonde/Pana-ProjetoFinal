import axios from "axios";

const api = axios.create({
    BASE_URL: "http://localhost:8080/"
})

export default api