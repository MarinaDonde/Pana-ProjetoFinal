import { useRef } from 'react'
import api from 'services/api';

const CadastrarOng = () => {

    const nome = useRef();
    const logourl = useRef();
    const sobre = useRef();
    const fburl = useRef();
    const instaurl = useRef();
    const mapaurl = useRef();

    function enviarDados(event) {
        event.preventDefault();
        api.post('/ongs', {
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
    <div className="contato-form">
    <form className="form" onSubmit={enviarDados}>
      <h1>Cadastrar</h1>
      <input type="text" className="form-control" ref={nome}></input>
      <input type="text" className="form-control" ref={logourl}></input>
      <input type="text" className="form-control" ref={sobre}></input>
      <input type="text" className="form-control" ref={fburl}></input>
      <input type="text" className="form-control" ref={instaurl}></input>
      <input type="text" className="form-control" ref={mapaurl}></input>
      <button type="submit" className="btn-contato">Enviar</button>
    </form>
  </div>
  )
}

export default CadastrarOng
