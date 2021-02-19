import React, {useReducer} from 'react'
import categoriaContext from './categoriaContext'
import categoriaReducer from './categoriaReducer'
import {AGREGAR_CATEGORIA, OBTENER_CATEGORIAS, CATEGORIA_ACTUAL} from '../../types';
import clienteAxios from '../../config/axios';

const CategoriaState = (props) => {
    const initialState = {
        categorias : [],
        categoria: null
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
            // console.log(contenido);
        } catch (error) {
            console.log(error);
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

    return (  
        <categoriaContext.Provider
            value={{
                categorias: state.categorias,
                categoria: state.categoria,
                agregarCategoria,
                obtenerCategorias,
                categoriaActual
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
}
 
export default CategoriaState;