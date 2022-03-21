import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import adus from '../../../img/Adus.png'
import adusMap from '../../../img/mapaAdus.png'
import './parceiros.css'

const Adus = () => {
    return (
        <section className="ong">
            <div className="container-ong">

                <a href="https://adus.org.br/" target="_blank" rel="noopener noreferrer">
                    <img className="img-ong" src={adus} alt="Logo Adus" />
                </a>
                <p className="text">
                    O Instituto Adus é uma ONG que promove a integração de refugiados na sociedade brasileira há mais de dez anos. Nós, do Adus, sabemos que a busca por refúgio não é uma escolha. É um direito. Refugiados são pessoas em situação de risco e vulnerabilidade, que tentam recomeçar suas vidas com segurança.
                    <div className="social-icons-ong">
                        <ul>
                            <li><a href="https://www.facebook.com/adusbrasil" target="_blank" rel="noopener
                        noreferrer"><AiOutlineFacebook /></a></li>
                            <li><a href="https://www.instagram.com/adusbrasil" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="map-ong">
                <h3>Como chegar:</h3>
                <img className="map-img" src={adusMap} alt="Logo Adus" />
            </div>
        </section>
    )
}

export default Adus
