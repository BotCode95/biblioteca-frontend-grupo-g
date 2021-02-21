import React, {useReducer} from 'react'
import libroContext from './libroContext'
import libroReducer from './libroReducer'
import {AGREGAR_LIBRO, OBTENER_LIBROS, LIBRO_ACTUAL} from '../../types';
import clienteAxios from '../../config/axios';

const LibroState = (props) => {
    const initialState = {
        libros : [],
        libro: null
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
            console.log(error);
        }
    }
    const obtenerLibros = async () => {
        try {
            const contenido = await clienteAxios.get('/libro')
            console.log(contenido);
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

    return (  
        <libroContext.Provider
            value={{
                libros: state.libros,
                libro: state.libro,
                agregarLibro,
                obtenerLibros,
                libroActual
            }}
        >
            {props.children}
        </libroContext.Provider>
    );
}
 
export default LibroState;