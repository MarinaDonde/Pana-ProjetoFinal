import axios from "axios";

const baseURL = "https://panaa.herokuapp.com";

class ContatoService {
    getAllContatos() {
        return axios.get(baseURL);
    }

    createContato(contato) {
        return axios.post(baseURL + "/contatos/");
    }

    getContatoById(id) {
        return axios.get(baseURL + "/contatos/" + id);
    }

    updateContato(id, contato) {
        return axios.put(baseURL + "/contatos/");
    }

    deleteContato(id) {
        return axios.delete(baseURL + "/contatos/");
    }
}

export default new ContatoService();