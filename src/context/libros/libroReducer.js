import {OBTENER_LIBROS, LIBRO_ACTUAL, AGREGAR_LIBRO, ELIMINAR_LIBRO, ERROR_LIBRO, ACTUALIZAR_LIBRO, DEVOLVER_LIBRO, PRESTAR_LIBRO} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
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
                libro : action.payload
            }
            case ELIMINAR_LIBRO :
            return {
                ...state,
                libros: state.libros.filter(libro => libro.id !== action.payload),
                libro: null, //reinicio
            }
        case ACTUALIZAR_LIBRO :
            return {
                ...state,
                libro : state.libros.map(libro => libro.id === action.payload)
            }
        case ERROR_LIBRO:
            return {
                ...state,
                mensaje: action.payload
            }
        case DEVOLVER_LIBRO :
            return {
                ...state,
                libros: state.libros.filter(libro => libro.persona_id === action.payload),
            }
        case PRESTAR_LIBRO :
            return {
                ...state,
                //libros: state.libros.filter(libro => libro.id === action.payload)//state.libros.map(libro => libro.persona_id === action.payload), //libro.id && puede ser filter
                libro: state.libros.filter(libro => libro.id === action.payload)
            }
        default: 
           return state;
    }
}