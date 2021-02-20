import {OBTENER_PERSONAS, PERSONA_ACTUAL, AGREGAR_PERSONA} from '../../types';

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
                persona: state.personas.filter(persona => persona.id === action.payload)
            }
        default: 
            return state;
           
    }
}
