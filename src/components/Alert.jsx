import Alert from 'react-bootstrap/Alert'
// COMPONENTE ALERT BASIC DE BOOSTRAP
const Alerta = ({ alerta }) => {
  return (
    <>
      <Alert className='text-center' variant={alerta.color}>
        {alerta.mensaje}
      </Alert>
    </>
  )
}

export default Alerta
