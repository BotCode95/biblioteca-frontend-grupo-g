import React, { Fragment, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import personaContext from '../../context/personas/personaContext';
import alertaContext from '../../context/alertas/alertaContext'

const NuevaPersona = () => {
    const history = useHistory();
    const personasContext = useContext(personaContext);
    const {mensaje, agregarPersona} = personasContext;

    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;

    const [persona, setPersonas ] = useState({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
    });
   
    const { nombre, apellido, alias, email } = persona;
    
    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    }, [mensaje]) 

    const actualizarState = e =>{
        setPersonas({
            ...persona,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
       e.preventDefault();
       agregarPersona(persona);
       
       history.push('/listado-persona');
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
                            {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
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