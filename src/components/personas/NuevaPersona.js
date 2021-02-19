import React, { Fragment, useState } from 'react'
import axios from 'axios';


const NuevaPersona = () => {

    const [ datos, guardarDatos ] = useState({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
    });
   
    //Extraer los valores
    const { nombre, apellido, alias, email } = datos;

    const [ error, actualizarError] = useState(false);
    

    //Funcion que se actualiza cada vez que el usuario escribe algo
     const actualizarState = e =>{
        guardarDatos ({
            ...datos,
            [e.target.name] : e.target.value
        })
    }


    //Cuando el usuario presiona guardar
    const handleSubmit = e =>{
       e.preventDefault();

                 
       //Validar
       if(nombre.trim() === "" || apellido.trim() === "" || alias.trim() === "" || email.trim() === ""){
           actualizarError(true);
           return;
       } 
       //Eliminar el mensaje previo
       actualizarError(false);

       //subir a la base de datos
       async function connect() {
           try {
            await axios.post('http://localhost:4000/persona', {datos} );
           } 
           catch (e) {
               console.log(e.message);
           }        
       }
       connect();
       
       
       //Reiniciar el form
       guardarDatos({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
       })

    }
    return ( 
        <Fragment>

            {error ? <p>Todos los campos son obligatorios</p> : null}

            <form onSubmit= {handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre"
                        value={nombre}
                        onChange= {actualizarState}
                    />               
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        name="apellido"
                        value= {apellido}
                        onChange= {actualizarState} 
                    />       
                </div>
                <div>
                    <label htmlFor="alias">Alias</label>
                    <input 
                        type="text" 
                        name="alias"
                        value={alias}
                        onChange= {actualizarState}
                    />               
                </div>        
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        name="email"
                        value={email}
                        onChange= {actualizarState} 
                    /> 
                </div>
                <div>
                    <input
                        type ="submit"
                        value ="Guardar"
                    />
                </div>
                              
            </form>        
        </Fragment>
     );
}
 
export default NuevaPersona;