import React, { Fragment, useContext, useState, useEffect } from 'react';
import libroContext from '../../context/libros/libroContext';
import personaContext from '../../context/personas/personaContext'
import categoriaContext from '../../context/categorias/categoriaContext'

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
    
    const personasContext = useContext(personaContext)
    const { obtenerPersonas, personas } = personasContext;

    const categoriasContext = useContext(categoriaContext)
    const { categorias } = categoriasContext;
    
    

    // const nombrePers = ()=>{
    //     const nombSel = personas.filter(persona => persona.id === persona_id);
        
    //     let nuevoAlias = new Array(); 

    //     for(let i=0; i< nombSel.length; i++){
    //         let item; 
    //         //console.log(nombSel[i].alias);
    //         let alias = nombSel[i].alias;
    //         nuevoAlias.push(alias);
           
    //     }
    //     console.log(nuevoAlias.toString());
    //     let aliasString = (nuevoAlias.toString());
    //     return aliasString;
    // }
    // nombrePers();
    
    const nombSel = personas.filter(persona => persona.id === persona_id)
    let nuevoAlias = new Array(); 

         for(let i=0; i< nombSel.length; i++){
                         
             let alias = nombSel[i].alias;
             nuevoAlias.push(alias);
         }
    
    const seleccionarLibro = id => {
        libroActual(id);
    }

    const nombCat = categorias.filter(categoria => categoria.id === categoria_id)
    console.log(nombCat);

    
    let nuevoCat = new Array(); 

         for(let i=0; i< nombCat.length; i++){
                         
             let catNom = nombCat[i].nombre;
             nuevoCat.push(catNom);
         }

     const libroEliminar = id => {
      
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

    

    return (
        <Fragment>
            
            <tbody >
                    <tr>
                        <td> {nombre} </td>
                        <td> {descripcion} </td>
                        <td> {nuevoCat} </td>
                        <td> {nuevoAlias} </td>
                        
                             
                          
                        
                        
                        <td>
                <IconButton aria-label="edit" color="primary" >
                    <EditIcon/>
                </IconButton>
                        </td>
                        
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                    {body}
                    </Modal> */}
                    <td>
                <IconButton aria-label="delete" color="secondary"
                    onClick={() => libroEliminar(libro.id)}>
                    <DeleteIcon/>
                </IconButton>
                        </td>

                        <td>
                <IconButton aria-label="prestar" color="primary" >
                    <VerticalAlignTopIcon/>
                </IconButton>
                        </td>
                        
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                    {bodyPrestar}
                    </Modal> */}

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