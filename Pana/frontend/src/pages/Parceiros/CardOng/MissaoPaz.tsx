import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import missaoPaz from '../../../img/MissaoPaz.png'
import missaoPazMap from '../../../img/mapaMissaoPaz.png'
import { useTranslation } from 'react-i18next';
import './parceiros.css'

const MissaoPaz = () => {

    const { t } = useTranslation();

    return (
        <section className="ong">
            <div className="container-ong">

                <a href="https://missaonspaz.org/" target="_blank" rel="noopener noreferrer">
                    <img className="img-ong" src={missaoPaz} alt="Logo Missão Paz" />
                </a>
                <p className="text">
                    {t('par22')}
                    <div className="social-icons-ong">
                        <ul>
                            <li><a href="https://www.facebook.com/missaopazsaopaulo/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a></li>
                            <li><a href="https://www.instagram.com/missaopazsp/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="map-ong">
                <h3>{t('title9')}</h3>
                <img className="map-img" src={missaoPazMap} alt="Logo missaoPaz" />
            </div>
        </section>
    )
}

export default MissaoPaz
