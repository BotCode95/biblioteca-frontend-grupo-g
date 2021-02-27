import React, {useContext, useState, useEffect} from 'react';
import categoriaContext from '../../context/categorias/categoriaContext';
import alertaContext from '../../context/alertas/alertaContext'
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Categoria = ({categoria}) => {
    const alertasContext = useContext(alertaContext);
    const {mostrarAlerta} = alertasContext;

    const categoriasContext = useContext(categoriaContext)
    const {categoriaActual, eliminarCategoria, mensaje, limpiarMensaje,} = categoriasContext;

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
  }, [mensaje])

    const seleccionarCategoria = id => {
        categoriaActual(id);
    }

    // const categoriaEliminar = id => {
    //   Swal.fire({
    //     title: 'Sweet!',
    //     confirmButtonText: 'Si'
    //   }).then((result) => {
    //     if(result.value){
    //       eliminarCategoria(id);
    //     }
    //       Swal.fire({
    //         title: 'Esta seguro de eliminar la categoría?',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         cancelButtonText: 'Cancelar',
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Si'
    //       })     
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //       if(mensaje){
    //         Swal.fire(
    //           'Error!',
    //           `${mensaje}`,
    //           'reject'
    //         )
    //       limpiarMensaje();
    //     }
    //     eliminarCategoria(id);
    //     Swal.fire(
    //       'Eliminado!',
    //       'La categoría fue eliminada.',
    //       'success'
    //     )
    //   }
    //   })
    //   }

      const categoriaEliminar = id => {
        setTimeout(() => {
          if(!mensaje) {
            eliminarCategoria(id)
          }
        },1000)
          Swal.fire({
            title: 'Esta seguro de eliminar la categoría?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
                if(mensaje){
                  Swal.fire(
                    'Error!',
                    `${mensaje}`,
                    'reject'
                  )
                  limpiarMensaje();
                }
                // eliminarCategoria(id);
                Swal.fire(
                  'Eliminado!',
                  'La categoría fue eliminada.',
                  'success'
                ) }
          })
        }

    return (
        <>
        <li className="item"> 
            <button
                type="button"
                className="boton-categoria"
                onClick={() => seleccionarCategoria(categoria.id)}   
            >
                {categoria.nombre}
            </button>
            <div className="item-container">
                <IconButton aria-label="delete" color="secondary"
                    onClick={() => categoriaEliminar(categoria.id)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </li>
        </>
    )
}
export default Categoria


