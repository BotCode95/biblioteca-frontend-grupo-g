import React, { Fragment, useState, useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import personaContext from '../../context/personas/personaContext';
import {useHistory} from 'react-router-dom';

const EditarPersona = () => {
    const history = useHistory();
    const personasContext = useContext(personaContext);
    const { actualizarPersona, personaSeleccionada, personaSinDatos} = personasContext;

    const [persona, setPersonas ] = useState({
        nombre:"",
        apellido:"",
        alias:"",
        email:""
    });
    
    // const personaeditar = personaSeleccionada;
    
    useEffect(() => {
        setPersonas(personaSeleccionada);
        
    },[personaSeleccionada]);
    
    //Funcion que se actualiza cada vez que el usuario escribe algo
    const actualizarState = e =>{
        setPersonas({
            ...persona,
            [e.target.name] : e.target.value
        })
    }
    
    
    const { nombre, apellido, alias, email } = persona;

    //Cuando el usuario presiona guardar
    const handleSubmit = e =>{
       e.preventDefault();
        actualizarPersona(persona);
        personaSinDatos();

        history.push('/listado-persona');
    }

    return ( 
        <Fragment>
            <Layout/>
            <div className="container">
                <div className="contenedor-form">
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
                                disabled="true"
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
 
export default EditarPersona;