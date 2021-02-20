import { TableHead } from '@material-ui/core';
import React, {Fragment, useContext} from 'react';
import personaContext from '../../context/personas/personaContext';

const Persona = ({persona}) => {
   
    const personasContext = useContext(personaContext)
    const {personaActual} = personasContext;

    const seleccionarPersona = id => {
        console.log("editando...");
        personaActual(id);
    }

    return (
        <Fragment>                           
                <tbody className="tabla-persona" >
                    <tr>
                        <td> {persona.nombre} </td>
                        <td> {persona.apellido} </td>
                        <td> {persona.alias} </td>
                        <td> {persona.email} </td>
                        <td>
                            <button  className="item-botonera-editar" 
                            onClick={() => seleccionarPersona(persona.id)}>Editar</button>
                        </td>
                        <td>
                            <button  className="item-botonera-eliminar">Eliminar</button>
                        </td>
                    </tr>                    
                </tbody>
 

        </Fragment>

        
    )
}

export default Persona