import React from 'react'
import CulturaBrasileira from './Cultura_en/culturaBrasileira'
import Economia from './Cultura_en/economia'
import Idioma from './Cultura_en/idioma'
import Religioes from './Cultura_en/religioes'
import './cultura.css'


const Cultura_en = () => {
  return (
    <>
      <Idioma />
      <Economia />
      <CulturaBrasileira />
      <Religioes />
    </>
  )
}

export default Cultura_en