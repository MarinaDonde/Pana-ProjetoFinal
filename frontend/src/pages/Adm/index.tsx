import React from 'react'
import { useEffect, useState } from "react";
import api from 'utils/api';
import Test from './test';

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
      <Test />
    </>
  )
}

export default Adm
