import axios from "axios";

const baseURL = "https://panaa.herokuapp.com";

class ContatoService {
    getAllContatos() {
        return axios.get(baseURL);
    }

    createContato(contato) {
        return axios.post(baseURL + contato);
    }

    getContatoById(id) {
        return axios.get(baseURL + "/contatos/" + id);
    }

    updateContato(id, contato) {
        return axios.put(baseURL + "/contatos/" + id, contato);
    }

    deleteContato(id) {
        return axios.delete(baseURL + "/contatos/" + id);
    }
}

export default new ContatoService();