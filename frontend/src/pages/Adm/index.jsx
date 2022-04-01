import { Link } from 'react-router-dom'
import './styles.css'

const Adm = () => {

  return (
    <>
      <Link to="/cadastrar">
        <button type="submit" className="btn-login">
          Cadastrar Ong
        </button>
      </Link>
      <Link to="/listaOngs">
        <button type="submit" className="btn-login">
          Lista de Parceiros
        </button>
      </Link>
      <Link to="/listaContatos">
        <button type="submit" className="btn-login">
          Mensagens Recebidas
        </button>
      </Link>
    </>
  )
}

export default Adm



