import React, { Fragment, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import libroContext from '../../context/libros/libroContext';
import categoriaContext from '../../context/categorias/categoriaContext'
import personaContext from '../../context/personas/personaContext'

const NuevoLibro = () => {
    const librosContext = useContext(libroContext);
    const {agregarLibro} = librosContext;
    const history = useHistory();

    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias} = categoriasContext;

    const personasContext = useContext(personaContext);
    const {persona,personas, obtenerPersonas} = personasContext;

    const [libro, setLibros ] = useState({
        nombre:"",
        descripcion:"",  
        categoria_id:null,
        persona_id:null
    });

     // parar el effect
    useEffect(() => {
        if(categoria == null){
            obtenerCategorias();
        }
        // eslint-disable-next
    },[categoria])


    useEffect(() => {
        if(persona == null){
            obtenerPersonas();
        }
        // eslint-disable-next
    },[persona])

   
    const { nombre, descripcion, categoria_id, persona_id } = libro;

    const [ error, actualizarError] = useState(false);
    

    //Funcion que se actualiza cada vez que el usuario escribe algo
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

    //Cuando el usuario presiona guardar
    const handleSubmit = e =>{
       e.preventDefault();
       console.log("enviando form");

                 
    //Validar
    if(nombre.trim() === "" || descripcion.trim() === "" ||  categoria_id.trim() === "" || persona_id.trim() === ""){
        actualizarError(true);
        return;
    } 
    //Eliminar el mensaje previo
    actualizarError(false);

       agregarLibro(libro);
       history.push('/listado-libro')           
       //Reiniciar el form
       setLibros({
        nombre:"",
        descripcion:"",
        categoria_id:null,
        persona_id:null
       })
        
    }
    return ( 
        <Fragment>
            <Layout/>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <div className="container">
            <div className="contenedor-form">
            <form onSubmit= {handleSubmit}
             className="form">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre"
                        className="form-input"
                        value={nombre}
                        onChange= {actualizarState}
                    />               
                </div>
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input 
                        type="text" 
                        name="descripcion"
                        className="form-input"
                        value= {descripcion}
                        onChange= {actualizarState} 
                    />       
                </div>
                <div>
                    <br/><br/>
                    <label htmlFor="categoria_id">Categoria   </label>              
                    <select
                            onChange={actualizarStateCategoria}                                            
                            value={categoria_id}                        
                    >
                            <option value=" ">-Seleccione-</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                            ))}
                    </select>      
                </div>        
                <div>
                    <br/><br/>
                    <label htmlFor="persona_id">Persona   </label>
                        <select
                            onChange={actualizarStatePersona}                                           
                            value={persona_id}                    
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
            </form>    
            </div>    
            </div>    
        </Fragment>
     );
}
export default NuevoLibro;