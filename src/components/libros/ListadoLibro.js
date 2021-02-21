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
        <div className="listado-container">
            <ul className="listado">
                {libros.map(libro => (
                    <Libro
                        libro = {libro}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

export default ListadoLibro;