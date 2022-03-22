import { Link } from 'react-router-dom';
import login from '../../img/login.png';
import { useTranslation } from 'react-i18next';
import './login.css';

const Login = () => {

  const { t } = useTranslation();

  return (
    <section className="login">
      <div>
        <img className="img-login" src={login} alt="login" />
      </div>
      <div className="login-form">
        <form className="form">
          <h1>{t('title11')}</h1>
          <input id="user" name="user" type="email" className="form-control" placeholder="Email" ></input>
          <input id="password" name="password" type="password" className="form-control" placeholder="Senha"></input>
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
