import contato from '../../img/contato.png'
import { useTranslation } from 'react-i18next';
import './contato.css'

const Contato = () => {

  const { t } = useTranslation();

  return (
    <section className="contato">
      <div>
        <img className="img-contato" src={contato} alt="Contato" />
      </div>
      <div className="contato-form">
        <form className="form">
          <h1>{t('title10')}</h1>
          <div>
            <input type="text" className="form-control" placeholder={t('input01')}></input>
            <input type="text" className="form-control" placeholder={t('input02')}></input>
          </div>
          <input type="text" className="form-control" placeholder={t('input03')}></input>
          <input type="text" className="form-control" placeholder={t('input04')}></input>
          <input type="email" className="form-control" placeholder={t('input05')}></input>
          <input type="phone" className="form-control" placeholder={t('input06')}></input>
          <input type="text" className="form-control-msg" placeholder={t('input07')}></input>
          <button type="submit" className="btn-contato">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato
