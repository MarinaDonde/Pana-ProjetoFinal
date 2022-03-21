import React from 'react'
import CulturaBrasileira from './CardCultura/culturaBrasileira'
import Economia from './CardCultura/economia'
import Idioma from './CardCultura/idioma'
import Religioes from './CardCultura/religioes'
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
