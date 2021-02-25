import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import categoriaContext from '../../context/categorias/categoriaContext';
import libroContext from '../../context/libros/libroContext';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Categoria = ({categoria}) => {
    const history = useHistory();
    const categoriasContext = useContext(categoriaContext)
    const {categoriaActual, eliminarCategoria} = categoriasContext;

    const librosContext = useContext(libroContext);
    const {obtenerLibrosCategoria } = librosContext;


    const seleccionarCategoria = id => {
        categoriaActual(id);
        obtenerLibrosCategoria(id); 
        history.push(`/libros/categoria/${categoria.id}`)
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
                {/* <IconButton aria-label="edit" color="primary" onClick={handleOpen}>
                    <EditIcon/>
                </IconButton> */}
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                    {body}
                    </Modal> */}
                <IconButton aria-label="delete" color="secondary"
                    onClick={() => categoriaEliminar(categoria.id)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </li>
    )
}
export default Categoria


