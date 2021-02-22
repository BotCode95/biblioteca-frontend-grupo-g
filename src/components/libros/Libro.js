import React, { Fragment, useContext, useState } from 'react';
import libroContext from '../../context/libros/libroContext';

import categoriaContext from '../../context/categorias/categoriaContext';
import personaContext from '../../context/personas/personaContext';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';

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

const Libro = ({libro}) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  
    
    // const categoriasContext = useContext(categoriaContext);
    // const {mensaje, agregarCategoria} = categoriasContext;


    const [libroEdit, setLibro] = useState({
        nombre: '',
        descrpcion:'',
        //categoria_id:0, Habria que ver de importar el ato de '/categoria'
        //persona_id:0, Habria que ver de importar el ato de '/persona'
        
    });
    // const {id} = categoria;
    const {nombre, descripcion} = libroEdit
   

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
    const body = (
        <div style={modalStyle} className={classes.paper}>
         <div className="contenedor-form">
                <h1>Editar Libro</h1>
                <form 
                    onSubmit={submitLibro}
                    className="form"
                >
                    <div>
                        <p>Titulo: {libro.nombre}</p>
                        <label htmlFor="descripcion">Editar descripción:</label>
                        <input 
                            type="textarea" 
                            name="descripcion"
                            id="descripcion"
                            className="form-input"
                            placeholder={libro.descripcion}
                            value={descripcion} 
                            onChange={onChange}
                            />
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="boton-submit"
                            value="Guardar Descripcion"/>
                    </div>
                </form>
            </div>
      </div>
    );

    const bodyPrestar = (
        <div style={modalStyle} className={classes.paper}>
         <div className="contenedor-form">
                <h1>Prestar Libro</h1>
                <form 
                    onSubmit={submitLibro}
                    className="form"
                >
                    <div>
                        <p>Titulo: {libro.nombre}</p>
                        <label htmlFor="descripcion">Nombre:</label>
                        <input 
                            type="text" 
                            name="nombre"
                            id="nombre"
                            className="form-input"
                            //placeholder={persona_id}//traer nombre de '/persona'
                            //value={persona_id} //traer nombre de '/persona'
                            onChange={onChange}
                            />
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="boton-submit"
                            value="Prestar"/>
                    </div>
                </form>
            </div>
      </div>
    );
  

    const librosContext = useContext(libroContext)
    const {actualizarLibro, agregarlibro, libroActual, eliminarLibro, devolverLibro} = librosContext;

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

    // const categoriasContext = useContext(categoriaContext);
    // const {categoria}= categoriasContext;

    // const personasContext = useContext(personaContext);
    // const {persona}= personasContext;

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
                            <IconButton aria-label="edit" color="primary" onClick={handleOpen}>
                                <EditIcon/>
                            </IconButton>
                        </td>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                    {body}
                    </Modal>
                    <td>
                        <IconButton aria-label="delete" color="secondary"
                            onClick={() => libroEliminar(libro.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="prestar" color="primary" onClick={handleOpen}>
                            <VerticalAlignTopIcon/>
                        </IconButton>
                    </td>
                        
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                    {bodyPrestar}
                    </Modal>

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