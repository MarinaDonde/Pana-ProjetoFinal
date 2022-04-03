import { useRef } from 'react';
import api from 'services/api';
import contato from '../../img/contato.png';
import { useTranslation } from 'react-i18next';
import './contato.css';

const Contato = () => {

  const { t } = useTranslation();  
  const nome = useRef();
  const sobrenome = useRef();
  const pais = useRef();
  const cidade = useRef();
  const email = useRef();
  const telefone = useRef();
  const mensagem = useRef();

  function enviarDados(event) {
    event.preventDefault();
    api.post("/contatos/", {
      nome: nome.current.value,
      sobrenome: sobrenome.current.value,
      pais: pais.current.value,
      cidade: cidade.current.value,
      email: email.current.value,
      telefone: telefone.current.value,
      mensagem: mensagem.current.value,
      
    }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    window.location.reload();
  }

  return (
    <section className="contato">
      <div>
        <img className="img-contato" src={contato} alt="Contato" />
      </div>
      <div className="contato-form">
        <form className="form" onSubmit={enviarDados}>
          <h1>{t('title10')}</h1>
          <div>
            <input type="text" placeholder={t('input01')} ref={nome}></input>
            <input type="text" className="form-control" placeholder={t('input02')} ref={sobrenome}></input>
          </div>
          <input type="text" className="form-control" placeholder={t('input03')} ref={pais}></input>
          <input type="text" className="form-control" placeholder={t('input04')} ref={cidade}></input>
          <input type="email" className="form-control" placeholder={t('input05')} ref={email}></input>
          <input type="phone" className="form-control" placeholder={t('input06')} ref={telefone}></input>
          <input type="text" className="form-control-msg" placeholder={t('input07')} ref={mensagem}></input>
          <button type="submit" className="btn-contato">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato;
