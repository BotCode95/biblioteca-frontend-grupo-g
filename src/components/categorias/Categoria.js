import React, {useContext} from 'react';
import categoriaContext from '../../context/categorias/categoriaContext';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Categoria = ({categoria}) => {

    const categoriasContext = useContext(categoriaContext)
    const {categoriaActual, eliminarCategoria} = categoriasContext;

    const seleccionarCategoria = id => {
        categoriaActual(id);
    }

     const categoriaEliminar = id => {
        // if(categoria.length > 0) {
        //    <p>{mensaje}</p>
        // }
        Swal.fire({
            title: 'Esta seguro de eliminar la categoría?',
            // text: "la eliminación es !",     
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarCategoria(id);
              Swal.fire(
                'Eliminado!',
                'La categoría fue eliminada.',
                'success'
              )
            }
          })
        console.log(id);
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
                 {/* <Button
                    variant="contained"
                    color="primary"
                    endIcon={<EditIcon/>}
                >Editar</Button> */}
                 {/* <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => categoriaEliminar(categoria.id)}
                >Eliminar</Button> */}
                <IconButton aria-label="edit" color="primary">
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" color="secondary"
                    onClick={() => categoriaEliminar(categoria.id)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </li>
    )
}

export default Categoria