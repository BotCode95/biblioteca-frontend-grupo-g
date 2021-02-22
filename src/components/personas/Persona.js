import React, {Fragment, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import personaContext from '../../context/personas/personaContext';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Persona = ({persona}) => {
    const history = useHistory();
    const personasContext = useContext(personaContext)
    const {personaActual, eliminarPersona} = personasContext;

    const seleccionarPersona = persona => {
        console.log(persona);
        
        personaActual(persona);
        history.push(`/persona/${persona.id}`)
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
                            <IconButton aria-label="edit" color="primary">
                             <EditIcon onClick={() => seleccionarPersona(persona)}/>
                            </IconButton>
                        </td>
                        <td>
                            <IconButton aria-label="delete" color="secondary"
                                onClick={() => personaEliminar(persona.id)}>
                                <DeleteIcon/>
                            </IconButton>
                        </td>
                    </tr>                    
                </tbody>
        </Fragment>
    )
}

export default Persona