import Alert from 'react-bootstrap/Alert'

const Alerta = ({ alerta }) => {
  return (
    <>
      <Alert variant={alerta.color}>
        {alerta.mensaje}
      </Alert>
    </>
  )
}

export default Alerta
