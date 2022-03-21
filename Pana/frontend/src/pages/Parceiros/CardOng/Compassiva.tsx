import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import compassiva from '../../../img/Compassiva.png'
import compassivaMap from '../../../img/mapaCompassiva.png'
import { useTranslation } from 'react-i18next';
import './parceiros.css'

const Compassiva = () => {

    const { t } = useTranslation();

    return (
        <section className="ong">
            <div className="container-ong">

                <a href="https://compassiva.org.br/" target="_blank" rel="noopener noreferrer">
                    <img className="img-ong" src={compassiva} alt="Logo Compassiva" />
                </a>
                <p className="text">
                    {t('par21')}
                    <div className="social-icons-ong">
                        <ul>
                            <li><a href="https://www.facebook.com/compassiva" target="_blank" rel="noopener
                        noreferrer"><AiOutlineFacebook /></a></li>
                            <li><a href="https://www.instagram.com/compassivabr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="map-ong">
                <h3>{t('title9')}</h3>
                <img className="map-img" src={compassivaMap} alt="Logo Compassiva" />
            </div>
        </section>
    )
}

export default Compassiva
