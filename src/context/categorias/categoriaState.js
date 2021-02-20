import React, {useReducer} from 'react'
import categoriaContext from './categoriaContext'
import categoriaReducer from './categoriaReducer'
import {
    AGREGAR_CATEGORIA, 
    OBTENER_CATEGORIAS, 
    CATEGORIA_ACTUAL, 
    ELIMINAR_CATEGORIA,
    ERROR_CATEGORIA,
    ACTUALIZAR_CATEGORIA
} from '../../types';
import clienteAxios from '../../config/axios';

const CategoriaState = (props) => {
    const initialState = {
        categorias : [],
        categoria: null,
        mensaje: null
        // categoriaseleccionada: null
    }
    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    const agregarCategoria = async categoria => {
        // console.log(categoria);
        try {
            const contenido = await clienteAxios.post('/categoria' , categoria);
            console.log(contenido);
            dispatch({
                type: AGREGAR_CATEGORIA,
                payload: categoria
            })
           
        } catch (error) {
            console.log(error);
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
            // console.log(contenido);
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

    const eliminarCategoria = async (categoriaId) => {
        try {
            const contenido = await clienteAxios.delete(`/categoria/${categoriaId}`);
            console.log(contenido)
            dispatch({
                type: ELIMINAR_CATEGORIA,
                payload: categoriaId
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_CATEGORIA,
                payload: error.response.data.Error
            })
        }
    }

    const actualizarCategoria = async categoria => {
        try {
            const contenido = await clienteAxios.put(`/categoria/${categoria.id}`, categoria);
            console.log(contenido);
            dispatch({
                type: ACTUALIZAR_CATEGORIA,
                payload: contenido.data.categoria
            })
        } catch (error) {
            console.log(error);
        }
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
                actualizarCategoria
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
}
 
export default CategoriaState;