import React, { Fragment, useContext, useState, useEffect } from 'react';
import libroContext from '../../context/libros/libroContext';
import personaContext from '../../context/personas/personaContext'
import categoriaContext from '../../context/categorias/categoriaContext'

import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';


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
  
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  
  const {nombre, descripcion, persona_id, categoria_id} = libro;  
       
  const librosContext = useContext(libroContext)
  const {actualizarLibro, prestarLibro, libroActual, eliminarLibro, devolverLibro} = librosContext;

  const handleOpen = () => {
    setOpen(true);
    libroActual(libro)
    console.log(libro)
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const personasContext = useContext(personaContext)
  const { obtenerPersonas, personas, persona} = personasContext;

  const categoriasContext = useContext(categoriaContext)
  const { categorias, categoria } = categoriasContext;

  // const [libroPrestar, setLibroPrestar] = useState({
  //   nombre: "",
  //   descripcion: "",
  //   categoria_id: null,
  //   persona_id: null
  // })

  
  const [libroPrestar, setLibroPrestar] = useState(libro)

  
  useEffect(() => {
    setLibroPrestar(libro);
    
},[libro]);

  const actualizarState = e =>{
    setLibroPrestar({
        ...libroPrestar,
        persona_id : e.target.value
        //[e.target.name] : e.target.value,
    })
  }

  const handleSubmit =  e =>{
    e.preventDefault();
    setOpen(false)
    // libroPrestar
    prestarLibro(libroPrestar);
    console.log(prestarLibro(libroPrestar));
  }


  const body = (
      <div style={modalStyle} className={classes.paper}>
       <div className="contenedor-form">
              <h1>Libros a prestar</h1>
              <form 
                  onSubmit={handleSubmit}
                  className="form"
              >
              <label>Seleccione la persona</label>
              <select
                  onChange={actualizarState}
                  value={libroPrestar.persona_id} 
                  // persona.id
              >
                  <option value="">-Seleccione-</option>
                  {personas.map(persona => (
                      <option key={persona.id} value={persona.id} >{persona.nombre}</option>
                  ))}
            </select>
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
    let nuevoAlias = []; 

         for(let i=0; i< nombSel.length; i++){
                         
             let alias = nombSel[i].alias;
             nuevoAlias.push(alias);
         }
    
    // const seleccionarLibro = id => {
    //     libroActual(id);
    // }

    const nombCat = categorias.filter(categoria => categoria.id === categoria_id)
    // console.log(nombCat);

    
    let nuevoCat = []; 
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
        <tbody>
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
            <td>
              <IconButton aria-label="delete" color="secondary"
                  onClick={() => libroEliminar(libro.id)}>
                  <DeleteIcon/>
              </IconButton>
            </td>

            <td>
              <IconButton aria-label="prestar" color="primary" onClick={handleOpen}>
                  <PublishIcon/>
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
              </Modal>
            </td>
            <td>
              <IconButton aria-label="devolver" color="secondary" onClick={() => libroDevolver(libro.id)}>
                  <GetAppIcon/>
              </IconButton>
            </td>  
          </tr>                    
        </tbody>     
      </Fragment>
    )
}

export default Libro;