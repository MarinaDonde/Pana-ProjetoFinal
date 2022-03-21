import React from 'react'
import CulturaBrasileira from './Cultura_br/culturaBrasileira'
import Economia from './Cultura_br/economia'
import Idioma from './Cultura_br/idioma'
import Religioes from './Cultura_br/religioes'
import './cultura.css'


const Cultura = () => {
  return (
    <>
      <Idioma />
      <Economia />
      <CulturaBrasileira />
      <Religioes />
    </>
  )
}

export default Cultura
