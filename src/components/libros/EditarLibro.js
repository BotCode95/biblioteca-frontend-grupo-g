import React, { Fragment, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import libroContext from '../../context/libros/libroContext';
import categoriaContext from '../../context/categorias/categoriaContext'

const EditarLibro = () => {
    const history = useHistory();
    const librosContext = useContext(libroContext);
    const {actualizarLibro, libroSeleccionado} = librosContext;

    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias} = categoriasContext;

    const [libro, setLibros ] = useState({
        nombre:"",
        descripcion:"",  
        categoria_id:null,
    });

    useEffect(() => {
        setLibros(libroSeleccionado)
        if(categoria == null){
            obtenerCategorias();
        }
        // eslint-disable-next
    },[categoria,libroSeleccionado])

    
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

    const { nombre, descripcion, categoria_id } = libro;
    
    const handleSubmit = e =>{
       e.preventDefault();
       actualizarLibro(libro)
       history.push('/listado-libro')  
    }
    return ( 
        <Fragment>
            <Layout/>
            <div className="container">
                <div className="contenedor-form">
                    <h1>Nueva Libro</h1>
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
export default EditarLibro;