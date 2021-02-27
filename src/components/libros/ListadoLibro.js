import React, {useContext, useEffect} from 'react';
import Layout from '../../components/layout/Layout'
import Libro from './Libro';
import libroContext from '../../context/libros/libroContext';
import personaContext from '../../context/personas/personaContext'
import categoriaContext from '../../context/categorias/categoriaContext'
import alertaContext from '../../context/alertas/alertaContext'

const ListadoLibro = () => {

    const librosContext = useContext(libroContext);
    const {mensaje, libro, libros, obtenerLibros} = librosContext;
    
    const personasContext = useContext(personaContext)
    const {obtenerPersonas} = personasContext;

    const categoriasContext = useContext(categoriaContext)
    const { obtenerCategorias } = categoriasContext;
    
    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;
    
    useEffect(() => {        
        obtenerLibros();
        obtenerPersonas();
        obtenerCategorias();
    },[libro])
    
    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    }, [mensaje])

    return(
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Libros</h1>
        {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
        <br/>
        <table className="tabla-persona">
            <thead className="tabla-head">
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Prestado</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                    <th>Prestar</th>
                    <th>Devolver</th>
                </tr>
            </thead>
            {libros.map(libro => (
                <Libro
                    key = {libro.id}
                    libro = {libro}  
                />
            ))}
        </table>
        </>
    )
}

export default ListadoLibro;