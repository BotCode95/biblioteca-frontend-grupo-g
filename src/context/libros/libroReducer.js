import {OBTENER_LIBROS, LIBRO_ACTUAL, AGREGAR_LIBRO} from '../../types';

export default (state,action) => {
    switch(action.type) {
        case OBTENER_LIBROS : 
            return {
                ...state,
                libros: action.payload
            }
        case AGREGAR_LIBRO :
            return {
                ...state,
                libros: [action.payload,...state.libros]
            }
        case LIBRO_ACTUAL :
            return {
                ...state,
                libro : state.libros.filter(libro => libro.id === action.payload)
            }
        default: 
           return state;
    }
}