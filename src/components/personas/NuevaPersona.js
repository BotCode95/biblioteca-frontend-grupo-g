import React, { Fragment, useState, useContext } from 'react'
// import axios from 'axios';
import personaContext from '../../context/personas/personaContext';

const NuevaPersona = () => {
    const personasContext = useContext(personaContext);
    const {agregarPersona} = personasContext;

    const [ personas, setPersonas ] = useState({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
    });
   
    const { nombre, apellido, alias, email } = personas;

    const [ error, actualizarError] = useState(false);
    

    //Funcion que se actualiza cada vez que el usuario escribe algo
     const actualizarState = e =>{
        setPersonas({
            ...personas,
            [e.target.name] : e.target.value
        })
    }


    //Cuando el usuario presiona guardar
    const handleSubmit = e =>{
       e.preventDefault();
       console.log("enviando form");

                 
       //Validar
       if(nombre.trim() === "" || apellido.trim() === "" || alias.trim() === "" || email.trim() === ""){
           actualizarError(true);
           return;
       } 
       //Eliminar el mensaje previo
       actualizarError(false);

       agregarPersona(persona);
       
       
       //Reiniciar el form
       setPersonas({
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