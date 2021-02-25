import React, {Fragment, useContext} from 'react';
import Libro from './Libro';
import categoriaContext from '../../context/categorias/categoriaContext'
import libroContext from '../../context/libros/libroContext';

const ListadoLibrosCategoria = () => {

    const categoriasContext = useContext(categoriaContext);
    const {categoria} = categoriasContext;

    const librosContext = useContext(libroContext);
    const {librosCategoria} = librosContext;

    const [categoriaActual] = categoria;

    return (  
        <Fragment>
            <h2>Categoria: {categoriaActual.nombre}</h2>
            <ul>
                {librosCategoria.map(libro => (
                    <Libro
                        key={libro.id}
                        libro={libro}
                    />
                    ))}
            </ul>
           
        </Fragment>
    );
}
export default ListadoLibrosCategoria;