import React, { useState} from 'react'
import { HiOutlineEye,HiOutlineEyeOff } from "react-icons/hi"; 
import { MdOutlineEmail,MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import login from '../../img/login.png';
import { useTranslation } from 'react-i18next';
import './login.css';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const { t } = useTranslation();

  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setShow(!show);
  }

  return (
    <section className="login">

      <div>
        <img className="img-login" src={login} alt="login" />
      </div>
      
      <div className="login-form">
        <form className="form">
          <h1>{t('title11')}</h1> <br/>
          <MdOutlineEmail/>

          <input id="user" name="user" type="email" className="form-control" placeholder="Email" value={email} onChange={event => setEmail(event.target.value) } ></input>
          <MdLockOutline/>

          <input id="password" name="password" type={show ? "text" : "password"} className="form-control" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value) }></input>

          <div className="login-eye">
            {show ? ( <HiOutlineEye onClick={handleClick} />) : (<HiOutlineEyeOff onClick={handleClick} />)

            }

          </div>


          <p>Não tem conta?
            <Link to="Form">Clique aqui</Link>
          </p>

          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default Login
