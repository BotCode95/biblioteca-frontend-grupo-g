import {
    OBTENER_PERSONAS, 
    PERSONA_ACTUAL, 
    AGREGAR_PERSONA, 
    ELIMINAR_PERSONA, 
    ERROR_PERSONA, 
    ACTUALIZAR_PERSONA, 
    PERSONA_SIN_DATOS
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){
        case OBTENER_PERSONAS:
            return {
                ...state,
                personas: action.payload
            }
        case AGREGAR_PERSONA :
            return {
                ...state,
                personas: [action.payload,...state.personas]
            }
        case PERSONA_ACTUAL: 
            return {
                ...state,
                personaSeleccionada: action.payload
                // persona: state.personas.filter(persona => persona.id === action.payload)
            }
        case ELIMINAR_PERSONA :
            return {
                ...state,
                personas: state.personas.filter(persona => persona.id !== action.payload),
                persona: null, //reinicio
            }
        case ACTUALIZAR_PERSONA :
            return {
                ...state,
                personas: state.personas.map(persona => persona.id === action.payload)
            }
        case PERSONA_SIN_DATOS:
            return {
                ...state,
                personaSeleccionada: null
            }
        case ERROR_PERSONA:
            return {
                ...state,
                mensaje: action.payload
            }
        default: 
            return state;  
    }
}
