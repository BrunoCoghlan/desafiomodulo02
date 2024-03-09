import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './components/Registro.jsx'
import React, { useState } from 'react'

const App = () => {
  // SE ALMACENA EL MENSAJE EN APP.
  const [mensaje, setMensaje] = useState('')
  const handleMensaje = (msj) => {
    setMensaje(msj)
  }
  return (
    <Registro handleMensaje={handleMensaje} mensaje={mensaje} />
  )
}

export default App
