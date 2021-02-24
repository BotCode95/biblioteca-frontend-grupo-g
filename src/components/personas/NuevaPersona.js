import React, { Fragment, useState, useContext } from 'react'
import Layout from '../../components/layout/Layout'
import personaContext from '../../context/personas/personaContext';

const NuevaPersona = () => {
    const personasContext = useContext(personaContext);
    const {agregarPersona} = personasContext;

    const [persona, setPersonas ] = useState({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
    });
   
    const { nombre, apellido, alias, email } = persona;

    const [ error, actualizarError] = useState(false);
    

    //Funcion que se actualiza cada vez que el usuario escribe algo
     const actualizarState = e =>{
        setPersonas({
            ...persona,
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

            <Layout/>
            {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="container">
            <div className="contenedor-form">
                <h1>Ingrese una persona</h1>
            <form onSubmit= {handleSubmit}
             className="form">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre"
                        className="form-input"
                        value={nombre}
                        onChange= {actualizarState}
                    />               
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        name="apellido"
                        className="form-input"
                        value= {apellido}
                        onChange= {actualizarState} 
                    />       
                </div>
                <div>
                    <label htmlFor="alias">Alias</label>
                    <input 
                        type="text" 
                        name="alias"
                        className="form-input"
                        value={alias}
                        onChange= {actualizarState}
                    />               
                </div>        
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        name="email"
                        className="form-input"
                        value={email}
                        onChange= {actualizarState} 
                    /> 
                </div>
                <div>
                    <input
                        type ="submit"
                        className="boton-submit"
                        value ="Guardar"
                    />
                </div>  
            </form>    
            </div>    
            </div>    
        </Fragment>
     );
}
 
export default NuevaPersona;