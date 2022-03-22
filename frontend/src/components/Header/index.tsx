import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Pana.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Pana" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
