import React, { Fragment, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import libroContext from '../../context/libros/libroContext';
import categoriaContext from '../../context/categorias/categoriaContext'
import personaContext from '../../context/personas/personaContext'
import alertaContext from '../../context/alertas/alertaContext'
import imagen from '../../public/static/img/chicaleyendo.svg'

const NuevoLibro = () => {
    const history = useHistory();

    const librosContext = useContext(libroContext);
    const {agregarLibro, mensaje} = librosContext;

    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias} = categoriasContext;

    const personasContext = useContext(personaContext);
    const {persona,personas, obtenerPersonas} = personasContext;

    const alertas = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertas; 

    const [libro, setLibros ] = useState({
        nombre:"",
        descripcion:"",  
        categoria_id:null,
        persona_id:null
    });

    useEffect(() => {
        if(categoria == null){
            obtenerCategorias();
        }
        if(persona == null){
            obtenerPersonas();
        }

        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
        // eslint-disable-next
    },[categoria, persona, mensaje])

    const { nombre, descripcion, categoria_id, persona_id } = libro;

    const actualizarState = e =>{
        setLibros({
            ...libro,  
           [e.target.name] : e.target.value
        })
    }

     const actualizarStateCategoria = e =>{
        setLibros({
            ...libro, 
           categoria_id : e.target.value
        })
    }

    const actualizarStatePersona = e =>{
        setLibros({
            ...libro,  
           persona_id : e.target.value
        })
    }

    const handleSubmit = e =>{
       e.preventDefault();

       agregarLibro(libro);

       if(nombre.length > 0) {
        history.push('/listado-libro');   
        }   
        
    }
    return ( 
        <Fragment>
            <Layout/>
            <div className="container">
                <div className="contenedor-form">
                    <h1>Nuevo Libro</h1>
                    <form onSubmit= {handleSubmit}
                    className="form">
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input 
                                type="text" 
                                name="nombre"
                                className="form-input"
                                value={nombre}
                                onChange= {actualizarState}
                            />               
                        </div>
                        <div>
                            <label htmlFor="descripcion">Descripción:</label>
                            <input 
                                type="text" 
                                name="descripcion"
                                className="form-input"
                                value= {descripcion}
                                onChange= {actualizarState} 
                            />       
                        </div>
                        <div>
                            <label htmlFor="categoria_id">Categoria:</label>              
                            <select
                                    onChange={actualizarStateCategoria}                                            
                                    value={categoria_id}                        
                                    className="form-input"
                            >
                                    <option value=" ">-Seleccione-</option>
                                    {categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                                    ))}
                            </select>      
                        </div>        
                        <div>
                            <label htmlFor="persona_id">Persona:</label>
                                <select
                                    onChange={actualizarStatePersona}                                           
                                    value={persona_id}  
                                    className="form-input"                  
                                >
                                    <option value=" ">-Seleccione-</option>
                                    {personas.map(persona => (
                                        <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                                    ))}
                                </select>  
                        </div>              
                        <div>
                            <input
                                type ="submit"
                                className="boton-submit"
                                value ="Guardar"
                            />
                        </div>  
                        {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
                    </form>    
                </div> 
                    <img className="imagen-ingrelibro" src={imagen} alt="ingreselibro"/>   
            </div>    
        </Fragment>
     );
}
export default NuevoLibro;