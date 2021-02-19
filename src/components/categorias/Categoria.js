import React, {useContext} from 'react';
import categoriaContext from '../../context/categorias/categoriaContext';

const Categoria = ({categoria}) => {

    const categoriasContext = useContext(categoriaContext)
    const {categoriaActual} = categoriasContext;

    const seleccionarCategoria = id => {
        categoriaActual(id);
    }

    return (
        <li className="item">
            <button
                type="button"
                className="boton-categoria"
                onClick={() => seleccionarCategoria(categoria.id)}
            >
                {categoria.nombre}
            </button>
            <div className="item-container">
                <button  className="item-botonera-editar">Editar</button>
                <button  className="item-botonera-eliminar">Eliminar</button>
            </div>
        </li>
    )
}

export default Categoria