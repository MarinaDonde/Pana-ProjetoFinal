import { Link } from 'react-router-dom'
import './styles.css'

const Adm = () => {

  return (
    <div className="adm">
      <div className="btns-adm">
        <Link to="/cadastrar">
          <button type="submit" className="btn-adm btn-adm-top">
            Cadastrar Parceiro
          </button>
        </Link>
        <Link to="/ongs/">
          <button type="submit" className="btn-adm">
            Lista de Parceiros
          </button>
        </Link>
        <Link to="/contatos/">
          <button type="submit" className="btn-adm">
            Mensagens Recebidas
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Adm



