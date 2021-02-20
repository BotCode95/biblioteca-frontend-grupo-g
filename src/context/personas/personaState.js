import React, {useReducer} from 'react'
import personaContext from './personaContext'
import personaReducer from './personaReducer'
import {AGREGAR_PERSONA, OBTENER_PERSONAS, 
    PERSONA_ACTUAL, ELIMINAR_PERSONA, ERROR_PERSONA} from '../../types'

import clienteAxios from '../../config/axios'

const PersonaState = (props) => {
    const initialState = {
        personas : [],
        persona: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(personaReducer, initialState);

    const agregarPersona = async persona => {
        try {
            const contenido = await clienteAxios.post('/persona', persona);
            console.log(contenido);
            dispatch({
                type: AGREGAR_PERSONA,
                payload: persona
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPersonas = async () => {
        try {
            const contenido = await clienteAxios.get('/persona');
            console.log(contenido);
            dispatch({
                type: OBTENER_PERSONAS,
                payload: contenido.data.Respuesta
            })
        } catch (error) {
            console.log(error);
        }
    }

    const personaActual = personaId => {
        dispatch({
            type: PERSONA_ACTUAL,
            payload: personaId
        })
    }

    const eliminarPersona = async (personaId) => {
        try {
            const contenido = await clienteAxios.delete(`/persona/${personaId}`);
            console.log(contenido)
            dispatch({
                type: ELIMINAR_PERSONA,
                payload: personaId
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_PERSONA,
                payload: error.response.data.Error
            })
        }
    }
    return ( 
        <personaContext.Provider
            value={{
                personas: state.personas,
                persona: state.persona,
                mensaje: state.mensaje,
                agregarPersona,
                obtenerPersonas,
                personaActual,
                eliminarPersona
            }}
        >
            {props.children}
        </personaContext.Provider>
     );
}
 
export default PersonaState;
