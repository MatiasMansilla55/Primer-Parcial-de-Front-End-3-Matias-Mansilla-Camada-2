import { useState } from "react"
import Card from './Card'

const Form = () => {
   const [afiliado, setAfiliado]= useState({
    
    nombre: '',
    obraSocial:'',
   
    
   })
   const [show, setShow]= useState(false);
   const [error, setError]= useState('');

  const  handlerSubmit=(e)=>{
    e.preventDefault();
    const regex = /^\S.*/;
    if(regex.test(afiliado.nombre) && afiliado.nombre.length >=3   && afiliado.obraSocial.length >=6 ){
      setShow(true);
      setError(false);
    }else{
      setError('Por favor chequea que la información sea correcta');
      setShow(false);
    }


  }
  
  
  return (

    <div>
        <form onSubmit={handlerSubmit}>
          <label >Nombre del afiliado:</label>
          <input type="text" onChange={(event) => setAfiliado({...afiliado, nombre: event.target.value})} />
          <label >Obra Social:</label>
          <input type="text" onChange={(event) => setAfiliado({...afiliado, obraSocial: event.target.value})} />
          
          <button >Enviar</button>
        </form>
        {console.log(show)}
        
        
        {
        
        show && <Card afiliado={afiliado} />  
        }
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
    </div>
  )
}

export default Form