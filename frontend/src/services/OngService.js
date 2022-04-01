import axios from "axios";

const baseURL = "http://localhost:8080";

class OngService {
    getAllOngs() {
        return axios.get(baseURL);
    }

    createOng(ong) {
        return axios.post(baseURL, ong);
    }

    getOngById(id) {
        return axios.get(baseURL + "/ongs/" + id);
    }

    updateOng(id, ong) {
        return axios.put(baseURL + "/ongs/" + id, ong);
    }

    deleteOng(id) {
        return axios.delete(baseURL + "/ongs/" + id);
    }
}

export default new OngService();