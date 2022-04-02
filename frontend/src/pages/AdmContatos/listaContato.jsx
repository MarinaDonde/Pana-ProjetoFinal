import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "services/api";
import ContatoService from "services/ContatoService";
import './styles.css'

const ListaContato = () => {
    const [contato, setContatos] = useState([]);

    useEffect(() => {
        api
            .get("/contatos")
            .then((response) => {
                setContatos(response.data);
                console.log(response);
            })
            .catch((error) => console.log(error));
    }, []);

    const getAllContatos = () => {
        ContatoService.getAllContatos()
            .then((response) => {
                setContatos(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllContatos();
    }, []);

    const deleteContato = (id) => {
        if (window.confirm("Deseja realmente excluir este cadastro?")) {
            ContatoService.deleteContato(id)
                .then((response) => {
                    getAllContatos();
                    window.location.reload();
                }).catch((error) => {
                    console.log(error);
                    const { data } = error.response;
                    if (data.status === 500)
                        alert("Não é possível excluir!");
                });
        };
    };

    return (
        <section className="section">
            <h1 className="section-title">Mensagens Recebidas:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>País</th>
                        <th>Cidade</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Mensagem</th>
                    </tr>
                </thead>
            </table>

            {contato.map((contato) => (
                <div key={contato.id} >
                    <table>
                        <tbody>
                            <tr>
                                <th>{contato.id} </th>
                                <td>{contato.nome} </td>
                                <td>{contato.sobrenome} </td>
                                <td>{contato.pais} </td>
                                <td>{contato.cidade} </td>
                                <td>{contato.telefone} </td>
                                <td>{contato.email} </td>
                                <td>{contato.mensagem} </td>
                                <td className="btn-excluir">
                                    <FaTrashAlt onClick={() => deleteContato(contato.id)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            <div className="btns-adm">
                <Link to="/cadastrar">
                    <button type="submit" className="btn-adm btn-adm-top">
                        Cadastrar Ong
                    </button>
                </Link>
                <Link to="/ongs">
                    <button type="submit" className="btn-adm">
                        Lista de Parceiros
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ListaContato;