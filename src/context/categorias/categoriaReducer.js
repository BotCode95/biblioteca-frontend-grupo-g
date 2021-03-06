import {
    OBTENER_CATEGORIAS, 
    CATEGORIA_ACTUAL,
    AGREGAR_CATEGORIA,
    ELIMINAR_CATEGORIA,
    ERROR_CATEGORIA,
    MENSAJE_NULL
} from '../../types'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type) {
        case OBTENER_CATEGORIAS : 
            return {
                ...state,
                categorias: action.payload
            }
        case AGREGAR_CATEGORIA :
            return {
                ...state,
                categorias: [action.payload,...state.categorias]
            }
        case CATEGORIA_ACTUAL :
            return {
                ...state,
                categoria : state.categorias.filter(categoria => categoria.id === action.payload)
            }
        case ELIMINAR_CATEGORIA :
            return {
                ...state,
                categorias: state.categorias.filter(categoria => categoria.id !== action.payload),
                categoria: null, //reinicio
            }
        case ERROR_CATEGORIA:
            return {
                ...state,
                mensaje: action.payload
            }
        case MENSAJE_NULL:
            return {
                ...state,
                mensaje: null
            }
        default: 
           return state;
    }
}