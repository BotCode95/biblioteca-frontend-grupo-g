import React, { Fragment, useState, useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import libroContext from '../../context/libros/libroContext';

import Categoria from '../../components/categorias/Categoria'
import categoriaContext from '../../context/categorias/categoriaContext'



const NuevoLibro = () => {
    const librosContext = useContext(libroContext);
    const {agregarLibro} = librosContext;



    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias} = categoriasContext;

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

   
    const { nombre, descripcion, categoria_id, persona_id } = libro;

    const [ error, actualizarError] = useState(false);
    

    //Funcion que se actualiza cada vez que el usuario escribe algo
     const actualizarState = e =>{
        setLibros({
            ...libro,
            [e.target.name] : e.target.value
        })
    }


    //Cuando el usuario presiona guardar
    const handleSubmit = e =>{
       e.preventDefault();
       console.log("enviando form");

                 
    //Validar
    if(nombre.trim() === "" || descripcion.trim() === "" || categoria_id.trim() === "" || persona_id.trim() === ""){
        actualizarError(true);
        return;
    } 
    //Eliminar el mensaje previo
    actualizarError(false);

       agregarLibro(libro);
       
       
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
                    <label htmlFor="categoria_id">Categoria</label>
    
                        <input 
                            type="text" 
                            name="categoria_id"
                            className="form-input"
                            value={categoria_id}
                            onChange= {actualizarState}
                        />  
                    

             <select
                            onChange={actualizarState}
                            value={categoria_id}
                        >
                            <option value="">-Seleccione-</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>
                            ))}
            </select>

     

                </div>        
                <div>
                    <label htmlFor="persona_id">Persona</label>
                    <input 
                        type="text" 
                        name="persona_id"
                        className="form-input"
                        value={persona_id}
                        onChange= {actualizarState} 
                    /> 
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