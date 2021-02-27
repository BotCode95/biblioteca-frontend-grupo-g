import React, {useReducer} from 'react'
import categoriaContext from './categoriaContext'
import categoriaReducer from './categoriaReducer'
import {
    AGREGAR_CATEGORIA, 
    OBTENER_CATEGORIAS, 
    CATEGORIA_ACTUAL, 
    ELIMINAR_CATEGORIA,
    ERROR_CATEGORIA,
    MENSAJE_NULL
} from '../../types';
import clienteAxios from '../../config/axios';

const CategoriaState = (props) => {
    const initialState = {
        categorias : [],
        categoria: null,
        mensaje: null
    }
    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    const agregarCategoria = async categoria => {
        try {
            await clienteAxios.post('/categoria' , categoria);
            dispatch({
                type: AGREGAR_CATEGORIA,
                payload: categoria
            })
           
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.Error,
                tipo: 'categoria-error'
            }
            dispatch({
                type: ERROR_CATEGORIA,
                payload: alerta
            })
        }
    }
    const obtenerCategorias = async () => {
        try {
            const contenido = await clienteAxios.get('/categoria')
            dispatch({
                type: OBTENER_CATEGORIAS,
                payload: contenido.data.respuesta
            })
        } catch (error) {
            console.log(error)
        }
    }
    const categoriaActual = categoriaId => {
        dispatch({
            type: CATEGORIA_ACTUAL,
            payload: categoriaId
        })
    }

    const eliminarCategoria = async categoriaId => {
        try {
            await clienteAxios.delete(`/categoria/${categoriaId}`);
            dispatch({
                type: ELIMINAR_CATEGORIA,
                payload: categoriaId
            })
        } catch (error) {
            dispatch({
                type: ERROR_CATEGORIA,
                payload: error.response.data.Error
            })
        }
    }

    const limpiarMensaje = () => {
        dispatch({
            type: MENSAJE_NULL
        })
    }

    return (  
        <categoriaContext.Provider
            value={{
                categorias: state.categorias,
                categoria: state.categoria,
                mensaje: state.mensaje,
                agregarCategoria,
                obtenerCategorias,
                categoriaActual,
                eliminarCategoria,
                limpiarMensaje
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
}
 
export default CategoriaState;