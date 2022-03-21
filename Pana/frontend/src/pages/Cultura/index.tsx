import React from 'react'
import CulturaBrasileira from './BrCultura/culturaBrasileira'
import Economia from './BrCultura/economia'
import Idioma from './BrCultura/idioma'
import Religioes from './BrCultura/religioes'
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
