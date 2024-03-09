import Alert from 'react-bootstrap/Alert'

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
