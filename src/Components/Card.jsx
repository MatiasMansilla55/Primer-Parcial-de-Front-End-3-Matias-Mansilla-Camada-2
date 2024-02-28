import React from 'react'

const Card = ({afiliado}) => {
  console.log(afiliado);
  return (
    <div>
     <h4>{afiliado.nombre}</h4>
      <h3>{afiliado.obraSocial}</h3>
      <h2>{afiliado.numero}</h2>
    </div>
  )
}

export default Card