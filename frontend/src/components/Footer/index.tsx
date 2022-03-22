import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'
import logo from '../../img/Pana.png'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo-footer">
                    <Link to="/">
                        <img src={logo} alt="Pana" />
                    </Link>   
                    <p>© Pana - Refugiados - Squad 27  Recode 2022</p>              
                </div>   
                <p id="paragrafo-footer">© Pana - Refugiados - Squad 27  Recode 2022</p>     
                <div className="social-icons">
                    <ul>
                        <li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener
                        noreferrer"><AiOutlineFacebook /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    </ul>              
                </div>
            </div>
        </footer>
    )
}

export default Footer
