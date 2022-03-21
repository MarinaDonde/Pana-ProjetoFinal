import contato from '../../img/contato.png'
import './contato.css'

const Contato = () => {
  return (
    <section className="contato">
      <div>
        <img className="img-contato" src={contato} alt="Contato" />
      </div>
      <div className="contato-form">
        <form className="form">
          <h1>Entre em Contato</h1>
          <div>
            <input type="text" className="form-control" placeholder="Primeiro nome"></input>
            <input type="text" className="form-control" placeholder="Segundo nome"></input>
          </div>
          <input type="text" className="form-control" placeholder="País de Origem"></input>
          <input type="text" className="form-control" placeholder="Cidade"></input>
          <input type="email" className="form-control" placeholder="Email"></input>
          <input type="phone" className="form-control" placeholder="Telefone"></input>
          <input type="text" className="form-control" placeholder="Mensagem"></input>
          <button type="submit" className="btn-contato">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato
