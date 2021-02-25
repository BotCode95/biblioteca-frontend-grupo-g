import React, { Fragment, useContext, useEffect } from 'react';
import libroContext from '../../context/libros/libroContext';
import categoriaContext from '../../context/categorias/categoriaContext';

import personaContext from '../../context/personas/personaContext';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';




const Libro = ({libro}) => {

    const {nombre, descripcion, persona_id, categoria_id} = libro;
   

    const librosContext = useContext(libroContext)
    const {actualizarLibro, agregarlibro, libroActual, eliminarLibro, devolverLibro} = librosContext;

    const categoriasContext = useContext(categoriaContext);
    const {obtenerCategorias,categorias, categoria} = categoriasContext;


        const nombreCat = () => {
            const catSel =categorias.filter(categoria => categoria.id === categoria_id); 
            console.log(catSel)
            return catSel
            
        }

        nombreCat();
    // useEffect(() => {
        
    // }, [])
    const seleccionarLibro = id => {
        libroActual(id);
    }

  

     const libroEliminar = id => {
        // if(categoria.length > 0) {
        //    <p>{mensaje}</p>
        // }
        Swal.fire({
            title: 'Esta seguro de eliminar este libro?',
            // text: "la eliminación es !",     
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarLibro(id);
              Swal.fire(
                'Eliminado!',
                'El libro fue eliminado.',
                'success'
              )
            }
          })
        console.log(id);
    }

    const libroDevolver = id => {
        // if(categoria.length > 0) {
        //    <p>{mensaje}</p>
        // }
        Swal.fire({
            title: 'Confirmas la deveolucion de este libro?',
            // text: "la eliminación es !",     
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
                devolverLibro(id);
              Swal.fire(
                'devuelto!',
                'El libro fue devuelto.',
                'success'
              )
            }
          })
        console.log(id);
    }

    //mostrar el nombre de la persona que sea tenga el mismo id que el persona_id

    return (
        <Fragment>
            <tbody >
                <tr>
                    <td> {libro.nombre} </td>
                    <td> {libro.descripcion} </td>
                    <td> {libro.categoria_id} </td>
                    <td> {libro.persona_id} </td>
                    <td>
                        <IconButton aria-label="edit" color="primary">
                            <EditIcon/>
                        </IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="delete" color="secondary"
                            onClick={() => libroEliminar(libro.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="prestar" color="primary" >
                        {/* onClick={handleOpen} */}
                            <VerticalAlignTopIcon/>
                        </IconButton>
                    </td>
                    <td>
                    <IconButton aria-label="devolver" color="secondary"
                        onClick={() => libroDevolver(libro.id)}>
                        <VerticalAlignBottomIcon/>
                    </IconButton>
                    </td>     
                </tr>                    
                </tbody>            
        </Fragment>
    )
}

export default Libro;