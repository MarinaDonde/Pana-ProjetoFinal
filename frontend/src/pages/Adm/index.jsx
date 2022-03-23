import React from 'react'
import { useEffect, useState } from "react";
import api from 'utils/api';

const Adm = () => {

  const [ong, setOngs] = useState([]);

  useEffect(() => {
    api
      .get("/ongs")
      .then((res) => {
        setOngs(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Cadastrar ONG</h1>
      <div>
        {ong.map((ong) => (
          <div key={ong.id}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Logo</th>
                  <th scope="col">Sobre</th>
                  <th scope="col">Facebook</th>
                  <th scope="col">Instagram</th>
                  <th scope="col">Mapa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{ong.id}</th>
                  <td>{ong.logourl} </td>
                  <td>{ong.sobre}</td>
                  <td>{ong.fburl}</td>
                  <td>{ong.instaurl}</td>
                  <td>{ong.mapaurl}</td>                 
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  )
}

export default Adm
