import React from 'react'
import Cards from './cards'
import Formulario from './formulario'
import { useEffect, useState } from "react";
import api from 'utils/api';

const Adm = () => {

  const [contato, setContatos] = useState([]);

  useEffect(() => {
    api
      .get("/contatos")
      .then((res) => {
        setContatos(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>API</h1>
      <Formulario />
      <Cards />
      <div>
        <h2>lixo</h2>
        {contato.map((contato) => (
          <div key={contato.id}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Endereço</th>
                  <th scope="col">CPF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{contato.id}</th>
                  <td>{contato.nome} </td>
                  <td>{contato.sobrenome}</td>
                  <td>{contato.email}</td>
                  <td>{contato.cidade}</td>
                  <td>{contato.pais}</td>                 
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Adm
