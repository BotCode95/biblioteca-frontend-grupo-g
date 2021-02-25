import React, {useReducer} from 'react'
import libroContext from './libroContext'
import libroReducer from './libroReducer'
import {AGREGAR_LIBRO, OBTENER_LIBROS, LIBRO_ACTUAL, ELIMINAR_LIBRO, ERROR_LIBRO, ACTUALIZAR_LIBRO, DEVOLVER_LIBRO, PRESTAR_LIBRO} from '../../types';
import clienteAxios from '../../config/axios';

const LibroState = (props) => {
    const initialState = {
        libros : [],
        libro: null,
        mensaje: null
    }
    const [state, dispatch] = useReducer(libroReducer, initialState);

    const agregarLibro = async libro => {

        //console.log(libro);
        
        try {
            const contenido = await clienteAxios.post('/libro', libro);
            console.log(contenido);
            dispatch({
                type: AGREGAR_LIBRO,
                payload: libro
            })
             console.log(contenido);
        } catch (error) {
            console.log(error);const alerta = {
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
            //console.log(contenido);
            dispatch({
                type: OBTENER_LIBROS,
                payload: contenido.data.respuesta
            })
        } catch (error) {
            console.log(error)
        }
    }
    const libroActual = libroId => {
        dispatch({
            type: LIBRO_ACTUAL,
            payload: libroId
        })
    }
    const eliminarLibro = async (libroId) => {
        try {
            const contenido = await clienteAxios.delete(`/libro/${libroId}`);
            console.log(contenido)
            dispatch({
                type: ELIMINAR_LIBRO,
                payload: libroId
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_LIBRO,
                payload: error.response.data.Error
            })
        }
    }

    const actualizarLibro = async libro => {
        try {
            const contenido = await clienteAxios.put(`/libro/${libro.id}`, libro);
            console.log(contenido);
            dispatch({
                type: ACTUALIZAR_LIBRO,
                payload: contenido.data.libro
            })
        } catch (error) {
            console.log(error);
        }
    }
    const devolverLibro = async (libroId) => {
        try {
            const contenido = await clienteAxios.put(`/libro/devolver/${libroId}`);
            console.log(contenido)
            dispatch({
                type: DEVOLVER_LIBRO,
                payload: null,
                
                
                // persona_id:"null"
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_LIBRO,
                payload: error.response.data.Error
            })
        }
    }
    const prestarLibro = async (libroId) => {
        try {
            const contenido = await clienteAxios.put(`/libro/prestar/${libroId}`);
            console.log(contenido)
            dispatch({
                type: PRESTAR_LIBRO,
                payload: libroId
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_LIBRO,
                payload: error.response.data.Error
            })
        }
    }
    return (  
        <libroContext.Provider
            value={{
                libros: state.libros,
                libro: state.libro,
                mensaje: state.mensaje,
                agregarLibro,
                obtenerLibros,
                libroActual,
                eliminarLibro,
                actualizarLibro,
                devolverLibro,
                prestarLibro
            }}
        >
            {props.children}
        </libroContext.Provider>
    );
}
 
export default LibroState;