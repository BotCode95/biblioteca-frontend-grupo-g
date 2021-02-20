import React, {Fragment, useContext} from 'react';
import { TableHead } from '@material-ui/core';
import personaContext from '../../context/personas/personaContext';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

const Persona = ({persona}) => {
   
    const personasContext = useContext(personaContext)
    const {personaActual, eliminarPersona} = personasContext;

    const seleccionarPersona = id => {
        console.log("editando...");
        personaActual(id);
    }
    const personaEliminar = id => {
        eliminarPersona(id);
        console.log(id);
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
                            <IconButton aria-label="delete" color="secondary"
                                onClick={() => personaEliminar(persona.id)}>
                                <DeleteIcon/>
                            </IconButton>
                            {/* <button  className="item-botonera-eliminar">Eliminar</button> */}
                        </td>
                    </tr>                    
                </tbody>
 

        </Fragment>

        
    )
}

export default Persona