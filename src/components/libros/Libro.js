import React, { Fragment, useContext, useState, useEffect } from 'react';
import libroContext from '../../context/libros/libroContext';
import personaContext from '../../context/personas/personaContext'

import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';



const Libro = ({libro}) => {

  const librosContext = useContext(libroContext)
  const {actualizarLibro, agregarlibro, libroActual, eliminarLibro, devolverLibro} = librosContext;

  const personasContext = useContext(personaContext)
  const { obtenerPersonas, personas  } = personasContext;
  

  const nombrePers = () =>{
      const perSel = personas.filter(persona => persona.id === persona_id)
          console.log(perSel)
  }
  nombrePers();
  
    //MODAL
    const [libroEdit, setLibro] = useState({
      nombre: '',
      descrpcion:'',
      categoria_id:0, 
      persona_id:0, 
      
  });
  // const {id} = categoria;
  const {nombre, descripcion, persona_id} = libroEdit   
    
    

  const onChange = e => {
      setLibro({
          ...libroEdit,
          [e.target.name]: e.target.value
      })
  }
  const libroActualizar = id => {
      actualizarLibro(id)
  }


  const submitLibro = e => {
      e.preventDefault();
      // if(nombre.trim() === ''){
      //     console.log('El nombre esta vacio');
      // }
      console.log('Enviado');
      libroActualizar(libroEdit);

  }

  
    // console.log ("Esto buscamos" , personaSeleccionada)
    
    const seleccionarLibro = id => {
        libroActual(id);
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
                        <td> {libro.nombre} </td>
                        <td> {libro.descripcion} </td>
                        <td> {libro.categoria_id} </td>
                        <td> {libro.persona_id} </td>
                        
                        
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