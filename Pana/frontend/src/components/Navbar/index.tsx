import React from 'react'
import { BsInfoSquare, BsPeople } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import { RiContactsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Navbar = () => {

  const { t } = useTranslation();

  return (
    <>
      <Header />
        <nav className="navbar">
          <div className="navigation">
            <ul>
              <li>
                <BiHome />
                <Link to="/"> {t('nav1')} </Link>
              </li>
              <li>
                <BsInfoSquare />
                <Link to="Cultura"> {t('nav2')}</Link>
              </li>
              <li>
                <BsPeople />
                <Link to="Parceiros">{t('nav3')}</Link>
              </li>
              <li>
                <GrContact />
                <Link to="Contato">{t('nav4')}</Link>
              </li>
              <li>
                <RiContactsLine />
                <Link to="Login">{t('nav5')}</Link>
              </li>
            </ul>
          </div>
          <div className="language-icons">
            <LanguageSwitcher />
          </div>
        </nav>
    </>
  )
}

export default Navbar
