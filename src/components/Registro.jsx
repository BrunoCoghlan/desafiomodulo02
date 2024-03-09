import Alert from './Alert.jsx'
import Formulario from './Formulario.jsx'
import SocialButton from './SocialButton.jsx'
import React, { useState } from 'react'

const Registro = () => {
  const [error, setError] = useState('')
  const [alert, setAlert] = useState(null)
  // FUNCION SE ASEGURA DE QUE EL VALOR DE ENTRADA SEA BOOLEANO.
  const handleError = (value) => {
    if (typeof value === 'boolean') {
      setAlert(true)
      setError(value)
      return
    }
    setError(null)
  }
  // FUNCION DEFINE EL COLOR Y MENSAJE DE ETIQUETA
  const alerta = () => {
    console.log('aca')
    if (error) {
      return { color: 'danger', mensaje: 'Completa todos los campos' }
    }
    return { color: 'success', mensaje: 'Registro Exitoso' }
  }
  // EVITA QUE SE MUESTRE LA ALERTA ANTES DE OPIMIR EL BOTON
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
        {alert ? <Alert alerta={alerta()} /> : null}
      </div>
    </>
  )
}

export default Registro
