import { Link } from 'react-router-dom'
import login from '../../img/login.png'
import './login.css'

const Login = () => {
  return (
    <section className="login">
      <div>
        <img className="img-login" src={login} alt="login" />
      </div>
      <div className="login-form">
        <form className="form">
          <h1>Bem vindo! Faça seu login:</h1>
          <input type="email" className="form-control" placeholder="Email"></input>
          <input type="password" className="form-control" placeholder="Senha"></input>
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
