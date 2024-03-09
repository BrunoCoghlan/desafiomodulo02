import React, { useState } from 'react'

const Formulario = ({ handleError }) => {
  // DECLARACION DE ESTADOS PARA EL FORMULARIOS
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [pswd2, setPswd2] = useState('')
  // FUNCIONES PARA GUARDAR EL ESTADO Y PASARLE EL VALOR AL VALUE DE LOS INPUTS
  const handleName = (e) => { setName(e.target.value) }
  const handleEmail = (e) => { setEmail(e.target.value) }
  const handlePswd = (e) => { setPswd(e.target.value) }
  const handlePswd2 = (e) => { setPswd2(e.target.value) }
  // FUNCION DE SUBMIT PARA VERIFICAR QUE LOS PARAMETROS NO ESTEN VACIOS Y LAS CONTRASEÑAS SEAN IGUALES
  const validSubmit = (e) => {
    // PREVIENE QUE SE RECARGE LA PAGINA
    e.preventDefault()
    // EVALUACION DE CAMPOS VACIOS, PASSWORD IGUALES Y MAYORES A 3 DIGITOS
    if (name === '' || email === '') {
      handleError(true, 'Completa todos los campos solicitados')
      return
    }
    if (pswd !== pswd2) {
      handleError(true, 'Las contraseñas no coinciden')
      return
    }
    if ((pswd.length < 4)) {
      handleError(true, 'La contraseña minimo de 4 caracteres')
      return
    }
    handleError(false, 'Registro exitoso!')
  }
  return (
    <>
      <form onSubmit={validSubmit} className='d-flex flex-column gap-2'>
        <input
          onChange={handleName}
          value={name}
          type='text'
          className='form-control fs-6'
          placeholder='Nombre'
        />
        <input
          onChange={handleEmail}
          value={email}
          type='email'
          className='form-control fs-6'
          placeholder='tuemail@ejemplo.com'
        />
        <input
          onChange={handlePswd}
          value={pswd}
          type='password'
          className='form-control fs-6'
          placeholder='Contraseña'
        />
        <input
          onChange={handlePswd2}
          value={pswd2}
          type='password'
          className='form-control fs-6'
          placeholder='Confirma tu contraseña'
        />
        <button type='submit' className='btn btn-success'>Registrarse</button>
      </form>
    </>
  )
}

export default Formulario
