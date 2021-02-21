import React, {useContext} from 'react';
import libroContext from '../../context/libros/libroContext';

const Libro = ({libro}) => {

    const librosContext = useContext(libroContext);
    const {libroActual} = librosContext;

    const seleccionarLibro = id => {
        libroActual(id);
    }

    return(
        <li className="item">
            <button
                type="button"
                className="boton-libro"
                onClick={() => seleccionarLibro(libro.id)}
            >
                {libro.nombre}
            </button>
            <p>{libro.descripcion}</p>
            <div className="item-container">
                <button  className="item-botonera-editar">Editar</button>
                <button  className="item-botonera-eliminar">Eliminar</button>
            </div>
        </li>
    )
}

export default Libro;