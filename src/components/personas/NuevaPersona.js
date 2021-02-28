import React, { Fragment, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import personaContext from '../../context/personas/personaContext';
import alertaContext from '../../context/alertas/alertaContext'
import imagen from '../../public/static/img/ingresepersona.svg'

const NuevaPersona = () => {
    const history = useHistory();

    const personasContext = useContext(personaContext);
    const {mensaje, agregarPersona} = personasContext;

    const alertas = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertas; 

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

       if(nombre.length > 0) {
        history.push('/listado-persona');
        }
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
                            <label htmlFor="nombre">Nombre:</label>
                            <input 
                                type="text" 
                                name="nombre"
                                className="form-input"
                                value={nombre}
                                onChange= {actualizarState}
                            />               
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido:</label>
                            <input 
                                type="text" 
                                name="apellido"
                                className="form-input"
                                value= {apellido}
                                onChange= {actualizarState} 
                            />       
                        </div>
                        <div>
                            <label htmlFor="alias">Alias:</label>
                            <input 
                                type="text" 
                                name="alias"
                                className="form-input"
                                value={alias}
                                onChange= {actualizarState}
                            />               
                        </div>        
                        <div>
                            <label htmlFor="email">Email:</label>
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
                        {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
                    </form>    
                </div> 
                    <img className="imagen-persona" src= {imagen} alt="ingresepersona"/>
            </div>    
        </Fragment>
     );
}
 
export default NuevaPersona;