import React, {useReducer} from 'react'
import libroContext from './libroContext'
import libroReducer from './libroReducer'
import {
    AGREGAR_LIBRO,
    OBTENER_LIBROS, 
    LIBRO_ACTUAL, 
    ELIMINAR_LIBRO, 
    ERROR_LIBRO, 
    ACTUALIZAR_LIBRO, 
    DEVOLVER_LIBRO, 
    PRESTAR_LIBRO,
    LIBRO_SIN_DATOS
} from '../../types';
import clienteAxios from '../../config/axios';

const LibroState = (props) => {
    const initialState = {
        libros : [],
        libro: null,
        libroSeleccionado: null,
        mensaje: null
    }
    const [state, dispatch] = useReducer(libroReducer, initialState);

    const agregarLibro = async libro => {
        try {
            await clienteAxios.post('/libro', libro);
            dispatch({
                type: AGREGAR_LIBRO,
                payload: libro
            })
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.Error,
                tipo: 'libro-error'
            }
            dispatch({
                type: ERROR_LIBRO,
                payload: alerta
            })
        }
    }
    const obtenerLibros = async () => {
        try {
            const contenido = await clienteAxios.get('/libro')
            dispatch({
                type: OBTENER_LIBROS,
                payload: contenido.data.respuesta
            })
        } catch (error) {
            console.log(error)
        }
    }
    const libroActual = libro => {
        dispatch({
            type: LIBRO_ACTUAL,
            payload: libro
        })
    }
    const eliminarLibro = async (libroId) => {
        try {
            await clienteAxios.delete(`/libro/${libroId}`);
            dispatch({
                type: ELIMINAR_LIBRO,
                payload: libroId
            })
        } catch (error) {
            console.log(error);
            const alerta = {
                mensaje: error.response.data.Error,
                tipo: 'libro-error'
            }
            dispatch({
                type: ERROR_LIBRO,
                payload: alerta
            })
        }
    }

    const actualizarLibro = async libro => {
        try {
            const contenido = await clienteAxios.put(`/libro/${libro.id}`, libro);
            dispatch({
                type: ACTUALIZAR_LIBRO,
                payload: contenido.data.libro
            })
        } catch (error) {
            console.log(error);
        }
    }
    const devolverLibro = async libroId => {
        try {
            await clienteAxios.put(`/libro/devolver/${libroId}`);
            dispatch({
                type: DEVOLVER_LIBRO,
                payload: null,
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_LIBRO,
                payload: error.response.data.Error
            })
        }
    }
    const prestarLibro = async libro => {
        try {
            const contenido = await clienteAxios.put(`/libro/prestar/${libro.id}`, libro);
            dispatch({
                type: PRESTAR_LIBRO,
                payload: contenido.data.libro
            })
        } catch (error) {
            dispatch({
                type: ERROR_LIBRO,
                payload: error.response.data.Error
            })
        }
    }
    const libroSinDatos = () => {
        dispatch({
            type: LIBRO_SIN_DATOS
        })
    }
  
    return (  
        <libroContext.Provider
            value={{
                libros: state.libros,
                libro: state.libro,
                libroSeleccionado: state.libroSeleccionado,
                mensaje: state.mensaje,
                agregarLibro,
                obtenerLibros,
                libroActual,
                eliminarLibro,
                actualizarLibro,
                devolverLibro,
                prestarLibro,
                libroSinDatos
            }}
        >
            {props.children}
        </libroContext.Provider>
    );
}
 
export default LibroState;