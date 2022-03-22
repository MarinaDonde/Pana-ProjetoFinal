import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import adus from '../../../img/Adus.png'
import adusMap from '../../../img/mapaAdus.png'
import { useTranslation } from 'react-i18next';
import './parceiros.css'

const Adus = () => {

    const { t } = useTranslation();

    return (
        <section className="ong">
            <div className="container-ong">

                <a href="https://adus.org.br/" target="_blank" rel="noopener noreferrer">
                    <img className="img-ong" src={adus} alt="Logo Adus" />
                </a>
                <p className="text">
                    {t('par20')}
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
                <h3>{t('title9')}</h3>
                <img className="map-img" src={adusMap} alt="Logo Adus" />
            </div>
        </section>
    )
}

export default Adus
