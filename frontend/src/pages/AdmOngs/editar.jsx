import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram, FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import api from "services/api";
import OngService from "services/OngService";
import './styles.css'

const Editar = () => {
    const [ong, setOngs] = useState([]);
    const { t } = useTranslation();
    const { id } = useParams();
    const [nome, setNome] = useState();
    const [logourl, setLogourl] = useState();
    const [sobre, setSobre] = useState();
    const [fburl, setFburl] = useState();
    const [instaurl, setInstaurl] = useState();
    const [mapaurl, setMapaurl] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/ongs")
            .then((response) => {
                setOngs(response.data);
                console.log(response);
            })
            .catch((error) => console.log(error));
    }, []);

    const updateOng = (id) => {
        const pana = {nome, logourl, sobre, fburl, instaurl, mapaurl};
        if (id) {
            OngService.updateOng(id, pana)
                .then((response) => {
                    navigate("/ongs/" + id);
                })
        } 

        
    };

    useEffect(() => {
        function getOngById() {
            if (id) {
                OngService.getOngById(id)
                    .then((response) => {
                        setNome(response.data.nome);
                        setLogourl(response.data.logourl);
                        setSobre(response.data.sobre);
                        setFburl(response.data.fburl);
                        setInstaurl(response.data.instaurl);
                        setMapaurl(response.data.mapaurl);
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
        getOngById();
    }, [id]);

    return (
        <div>

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
                            <FaRegEdit onClick={() => updateOng(ong.id)} />
                        </td>
                    </section>
                </div>

        </div>


    )
}

export default Editar;