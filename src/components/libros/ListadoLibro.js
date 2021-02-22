import React, {useContext, useEffect} from 'react';
import Layout from '../../components/layout/Layout'
import Libro from './Libro';
import libroContext from '../../context/libros/libroContext';

const ListadoLibro = () => {

    const librosContext = useContext(libroContext);
    const {libros, obtenerLibros} = librosContext;
console.log(libros);
    useEffect(() => {
        
        obtenerLibros();
    })
   
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
                            <th>#</th>
                            <th>#</th>
                            <th>#</th>
                            <th>#</th>
                        </tr>
                </thead>
                {libros.map(libro => (
                    <Libro
                        libro = {libro}
                    />
                ))}
        </table>
        </>
    )
}

export default ListadoLibro;