import React, {Fragment, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import personaContext from '../../context/personas/personaContext';
import libroContext from '../../context/libros/libroContext';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { orange } from '@material-ui/core/colors';

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


const Persona = ({persona}) => {
    const history = useHistory();
    const personasContext = useContext(personaContext)
    const {personaActual, eliminarPersona} = personasContext;

    const librosContext = useContext(libroContext)
    const { libros } = librosContext;

    const selectLibro = libros.filter(libro => libro.persona_id === persona.id);
    let nuevoLibros = []; 
      for(let i=0; i< selectLibro.length; i++){
        let nombreLibro = selectLibro[i].nombre;
        nuevoLibros.push(nombreLibro);
      }
//MODAL
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="contenedor-form">
          <h1>Libros</h1>      
          <div >                      
              {nuevoLibros.map(newLibros=>(
              <li className="texto-modal">
              {newLibros}
              </li>                                   
              ))}
          </div>
        </div>
      </div>
    );

    const seleccionarPersona = persona => {
        personaActual(persona);
        history.push(`/persona/${persona.id}`)
    }
    const personaEliminar = id => {
        eliminarPersona(id);
    }
    return (
        <Fragment>                           
          <tbody className="tabla-persona" >
              <tr>
                  <td> {persona.nombre} </td>
                  <td> {persona.apellido} </td>
                  <td> {persona.alias} </td>
                  <td> {persona.email} </td>
                  <td>
                      <IconButton aria-label="edit" style={{ color: orange[900] }}>
                        <EditIcon onClick={() => seleccionarPersona(persona)}/>
                      </IconButton>
                  </td>
                  <td>
                      <IconButton aria-label="delete" style={{ color: orange[900] }}
                          onClick={() => personaEliminar(persona.id)}>
                          <DeleteIcon/>
                      </IconButton>
                  </td>
                      
                  <td>
                      <IconButton aria-label="prestados">
                      {nuevoLibros.length > 0 ? <MenuBookIcon style={{ color: orange[900] }} onClick={handleOpen}/>  :  <MenuBookIcon color="disabled"/> }
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
              </tr>                    
          </tbody>
        </Fragment>
    )
}

export default Persona