import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import missaoPaz from '../../../img/MissaoPaz.png'
import missaoPazMap from '../../../img/mapaMissaoPaz.png'
import './parceiros.css'

const MissaoPaz = () => {
    return (
        <section className="ong">
            <div className="container-ong">

                <a href="https://missaonspaz.org/" target="_blank" rel="noopener noreferrer">
                    <img className="img-ong" src={missaoPaz} alt="Logo Missão Paz" />
                </a>
                <p className="text">
                    A Missão Paz é uma instituição filantrópica scalabriniana de apoio e acolhimento a imigrantes e refugiados na cidade de São Paulo, em atividade desde os anos 1930.
                    <div className="social-icons-ong">
                        <ul>
                            <li><a href="https://www.facebook.com/missaopazsaopaulo/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a></li>
                            <li><a href="https://www.instagram.com/missaopazsp/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="map-ong">
                <h3>Como chegar:</h3>
                <img className="map-img" src={missaoPazMap} alt="Logo missaoPaz" />
            </div>
        </section>
    )
}

export default MissaoPaz
