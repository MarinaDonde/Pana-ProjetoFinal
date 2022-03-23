import api from "../utils/api";

export async function save(contato) {
    await api.post("/contatos/", {
        nome: contato.nome,
        sobrenome: contato.sobrenome,
        pais: contato.pais,
        cidade: contato.cidade,
        email: contato.email,
        telefone: contato.telefone,
        mensagem: contato.mensagem
    })
}

export async function getContatos() {
    return (await api.get('/contatos')).data
}

export async function deleteContato(id) {
    await api.delete(`/contatos/${id}`)
}

