import axios from "axios";

const api = axios.create({
    BASE_URL: "https://refugiopana.herokuapp.com/"
})

export default api