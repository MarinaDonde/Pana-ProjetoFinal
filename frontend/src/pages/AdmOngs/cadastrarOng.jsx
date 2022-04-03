import { useRef } from 'react'
import { Link } from 'react-router-dom';
import api from 'services/api';
import './styles.css'

const CadastrarOng = () => {

  const nome = useRef();
  const logourl = useRef();
  const sobre = useRef();
  const fburl = useRef();
  const instaurl = useRef();
  const mapaurl = useRef();

  function enviarDados(event) {
    event.preventDefault();
    api.post("/ongs/", {
      nome: nome.current.value,
      logourl: logourl.current.value,
      sobre: sobre.current.value,
      fburl: fburl.current.value,
      instaurl: instaurl.current.value,
      mapaurl: mapaurl.current.value,

    }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    window.location.reload();
  }

  return (
    <>
      <div className="contato-form">
        <form className="form-ong" onSubmit={enviarDados}>
          <h1 className="title-ong">Cadastrar Ong Parceira:</h1>
          <div className="ong-items">
            <div>
              <div className="container-input">
                <label className="ong-label">Nome:
                  <input type="text" className="ong-control" ref={nome}></input>
                </label>
              </div>
              <div className="container-input">
                <label className="ong-label">URL Logo:
                  <input type="text" className="ong-control" ref={logourl}></input>
                </label>
              </div>
              <div className="container-input">
                <label className="ong-label">Sobre:
                  <input type="text" className="ong-control" ref={sobre}></input>
                </label>
              </div>
              <div className="container-input">
                <label className="ong-label">URL Facebook:
                  <input type="text" className="ong-control" ref={fburl}></input>
                </label>
              </div>
              <div className="container-input">
                <label className="ong-label">URL Instagram:
                  <input type="text" className="ong-control" ref={instaurl}></input>
                </label>
              </div>
              <div className="container-input">
                <label className="ong-label">URL Mapa:
                  <input type="text" className="ong-control" ref={mapaurl}></input>
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn-ong">Enviar</button>
        </form>
      </div>
      <div className="btns-adm">
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
    </>
  )
}

export default CadastrarOng
