import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "services/api";
import OngService from "services/OngService";
import './styles.css'

const ListaOng = () => {
    const [ong, setOngs] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        api
            .get("/ongs/")
            .then((response) => {
                setOngs(response.data);
                console.log(response);
            })
            .catch((error) => console.log(error));
    }, []);

    const getAllOngs = () => {
        OngService.getAllOngs()
            .then((response) => {
                setOngs(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllOngs();
    }, []);

    const deleteOng = (id) => {
        if (window.confirm("Deseja realmente excluir este cadastro?")) {
            OngService.deleteOng(id)
                .then((response) => {
                    getAllOngs();
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
        <>
            <div>
                <h1 className="title-ong">Ongs Parceiras:</h1>
                {ong.map((ong) => (
                    <div key={ong.id} >
                        <section className="ong">
                            <div className="container-ong">
                                <a href="https://compassiva.org.br/" target="_blank" rel="noopener noreferrer">
                                    <img className="img-ong" src={ong.logourl} alt={ong.nome} />
                                </a>
                                <p className="text">{ong.sobre}
                                    <div className="social-icons-ong">
                                        <ul>
                                            <li><a href={ong.fburl} target="_blank" rel="noopener
                            noreferrer"><AiOutlineFacebook /></a></li>
                                            <li><a href={ong.instaurl} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                        </ul>
                                    </div>
                                </p>
                            </div>
                            <div className="map-ong">
                                <h1 className="title-parceiros">{t('title9')}</h1>
                                <img className="map-img" src={ong.mapaurl} alt={ong.nome} />
                            </div>
                            <td class="btn-excluir">
                                <FaTrashAlt onClick={() => deleteOng(ong.id)} />
                            </td>
                        </section>
                    </div>
                ))}
            </div>
            <div className="btns-adm">
                <Link to="/cadastrar">
                    <button type="submit" className="btn-adm">
                        Cadastrar Parceiro
                    </button>
                </Link>
                <Link to="/contatos/">
                    <button type="submit" className="btn-adm">
                        Mensagens Recebidas
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ListaOng;