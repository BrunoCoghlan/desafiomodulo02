import Alert from './Alert.jsx'
import Formulario from './Formulario.jsx'
import SocialButton from './SocialButton.jsx'
import React, { useState } from 'react'

const Registro = () => {
  const [error, setError] = useState('')
  // FUNCION SE ASEGURA DE QUE EL VALOR DE ENTRADA SEA BOOLEANO.
  const handleError = (value) => {
    if (typeof value === 'boolean') {
      setError(value)
      return
    }
    setError(null)
  }
  // FUNCION DEFINE EL COLOR Y MENSAJE DE ETIQUETA
  const alerta = () => {
    if (error) {
      return { color: 'danger', mensaje: 'Completa todos los campos' }
    }
    return { color: 'success', mensaje: 'Registro Exitoso' }
  }

  return (
    <>
      <div className='formulario-registro'>
        <h2>Crea una cuenta</h2>
        <div className='d-flex justify-content-evenly'>
          <SocialButton logo='fa-brands fa-facebook red-social' />
          <SocialButton logo='fa-brands fa-github red-social' />
          <SocialButton logo='fa-brands fa-linkedin red-social' />
        </div>
        <p>o usa tu email para registrarte</p>
        <Formulario handleError={handleError} />
        <Alert alerta={alerta()} />
      </div>
    </>
  )
}

export default Registro
