import React from 'react'
import { BsInfoSquare, BsPeople } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import { RiContactsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Header from 'components/Header';

import './styles.css';

const Navbar = () => {
  return (
    <>
      <Header />
        <nav className="navbar">
          <div className="navigation">
            <ul>
              <li>
                <BiHome />
                <Link to="/">HOME</Link>
              </li>
              <li>
                <BsInfoSquare />
                <Link to="Cultura">CULTURA BRASILEIRA</Link>
              </li>
              <li>
                <BsPeople />
                <Link to="Parceiros">PARCEIROS</Link>
              </li>
              <li>
                <GrContact />
                <Link to="Contato">CONTATO</Link>
              </li>
              <li>
                <RiContactsLine />
                <Link to="Login">ENTRAR</Link>
              </li>
            </ul>
          </div>
          <div className="language-icons">
            <ul>
              <li>
                <Link to="/"><img src="https://i.imgur.com/TCgzXHq.png" alt="English Icon" className="language"></img></Link>
              </li>
              <li>
              <Link to="/"><img src="https://i.imgur.com/qie2Y6l.png" alt="Spanish Icon" className="language"></img></Link>
              </li>
              <li>
              <Link to="/"><img src="https://i.imgur.com/UsMqoqa.png" alt="French Icon" className="language"></img></Link>
              </li>
              <li>
              <Link to="/"><img src="https://i.imgur.com/G1jmQvX.png" alt="Brazilian Icon" className="language"></img></Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar
