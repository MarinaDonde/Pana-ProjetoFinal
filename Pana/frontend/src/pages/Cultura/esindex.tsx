import React from 'react'
import CulturaBrasileira from './EsCultura/culturaBrasileira'
import Economia from './EsCultura/economia'
import Idioma from './EsCultura/idioma'
import Religioes from './EsCultura/religioes'
import './cultura.css'


const EsCultura = () => {
  return (
    <>
      <Idioma />
      <Economia />
      <CulturaBrasileira />
      <Religioes />
    </>
  )
}

export default EsCultura