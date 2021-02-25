import React, {useContext, useEffect} from 'react';
import Layout from '../../components/layout/Layout'
import Libro from './Libro';
import libroContext from '../../context/libros/libroContext';
import personaContext from '../../context/personas/personaContext'
import categoriaContext from '../../context/categorias/categoriaContext'

const ListadoLibro = () => {

    const librosContext = useContext(libroContext);
    const {libros, obtenerLibros} = librosContext;
    

    const personasContext = useContext(personaContext)
    const {personas, obtenerPersonas} = personasContext;

    const categoriasContext = useContext(categoriaContext)
    const { obtenerCategorias } = categoriasContext;
    
    
    useEffect(() => {        
        obtenerLibros();
        obtenerPersonas();
        obtenerCategorias();
    },[])
    
    // console.log(personas)
    return(
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Libros</h1>
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