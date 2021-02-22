import React, {useContext, useState, useEffect} from 'react';
import categoriaContext from '../../context/categorias/categoriaContext';

import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Categoria = ({categoria}) => {
    // const classes = useStyles();
    // // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = useState(getModalStyle);
    // const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

  
    
    // // const categoriasContext = useContext(categoriaContext);
    // // const {mensaje, agregarCategoria} = categoriasContext;


    // const [categoriaEdit, setCategoria] = useState({
    //     nombre: '',
        
    // });
    // // const {id} = categoria;
    // const {nombre} = categoriaEdit
   

    // const onChange = e => {
    //     setCategoria({
    //         ...categoriaEdit,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // const categoriaActualizar = id => {
    //     actualizarCategoria(id)
    // }


    // const submitCategoria = e => {
    //     e.preventDefault();
    //     // if(nombre.trim() === ''){
    //     //     console.log('El nombre esta vacio');
    //     // }
    //     console.log('Enviado');
    //     categoriaActualizar(categoriaEdit);

    // }
    // const body = (
    //     <div style={modalStyle} className={classes.paper}>
    //      <div className="contenedor-form">
    //             <h1>Editar Categoría</h1>
    //             <form 
    //                 onSubmit={submitCategoria}
    //                 className="form"
    //             >
    //                 <div>
    //                     <label htmlFor="nombre">Nombre de Categoría:</label>
    //                     <input 
    //                         type="text" 
    //                         name="nombre"
    //                         id="nombre"
    //                         className="form-input"
    //                         placeholder={categoria.nombre}
    //                         value={nombre} 
    //                         onChange={onChange}
    //                         />
    //                 </div>
    //                 <div>
    //                     <input
    //                         type="submit"
    //                         className="boton-submit"
    //                         value="Guardar Categoría"/>
    //                 </div>
    //             </form>
    //         </div>
    //   </div>
    // );
  

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


