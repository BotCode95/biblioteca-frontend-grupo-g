import React, {useContext, useEffect} from 'react'
import Layout from '../../components/layout/Layout'
import Categoria from './Categoria'
import categoriaContext from '../../context/categorias/categoriaContext'
import libroContext from '../../context/libros/libroContext'
import alertaContext from '../../context/alertas/alertaContext'
import imagen from '../../public/static/img/chicalibros.svg'

const ListadoCategoria = () => {
    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias, mensaje} = categoriasContext;

    const librosContext = useContext(libroContext)
    const { obtenerLibros } = librosContext;

    
    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;

    useEffect(() => {
        if(categoria == null){
            obtenerCategorias();
            obtenerLibros();
        }
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
        // eslint-disable-next
    },[categoria, mensaje])
   
    setTimeout(() => {
        if(categorias.length === 0) return (
            <p
                className="msj-no-categorias"
            >No hay categorias, podes crear una</p>
        )
    },2000)
   
    return (
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Categorias</h1>
        <div className="alerta-container">
            {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
        </div>
        <div className="containerDos">
            <div className="listado-container">
                <table className="tabla-persona">
                    <thead className="tabla-head">
                        <tr>
                            <th>Nombre</th>
                            <th>Eliminar</th>
                            <th>Libros</th>                        
                        </tr>
                    </thead>
                        {categorias.map(categoria => (
                            <Categoria
                                key={categoria.id}
                                categoria = {categoria}
                            />
                        ))}
                </table>           
            </div>
        
            <div>
                <img className= "imagen-listcat" src={imagen} alt="chicalibros"/>    
            </div>
        </div>            
        </>
    )
}

export default ListadoCategoria
