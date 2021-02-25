import React, {useContext, useEffect} from 'react';
import Layout from '../../components/layout/Layout'
import Libro from './Libro';
import libroContext from '../../context/libros/libroContext';
import categoriaContext from '../../context/categorias/categoriaContext';

const ListadoLibro = () => {

    const librosContext = useContext(libroContext);
    const {libros, obtenerLibros} = librosContext;

    const categoriasContext = useContext(categoriaContext);
    const {obtenerCategorias, categoria, categorias} = categoriasContext;

    useEffect(() => {
        obtenerLibros();
        obtenerCategorias();
    },[])
   

    console.log(categorias);
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