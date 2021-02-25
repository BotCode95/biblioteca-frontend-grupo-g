import {OBTENER_LIBROS, LIBRO_ACTUAL, AGREGAR_LIBRO, ELIMINAR_LIBRO, ERROR_LIBRO, ACTUALIZAR_LIBRO, DEVOLVER_LIBRO, PRESTAR_LIBRO} from '../../types';

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
                libros: state.libros.filter(libro => libro.persona_id == action.payload),
                //persona_id: null, //reinicio
            }
        case PRESTAR_LIBRO :
            return {
                ...state,
                libros: state.libros.filter(libro => libro.id == action.payload),
                persona_id: null, //reinicio
            }
        default: 
           return state;
    }
}