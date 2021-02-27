import React, {useContext, useEffect} from 'react'
import Layout from '../../components/layout/Layout'
import Categoria from './Categoria'
import categoriaContext from '../../context/categorias/categoriaContext'
import alertaContext from '../../context/alertas/alertaContext'

const ListadoCategoria = () => {
    const categoriasContext = useContext(categoriaContext);
    const {categoria, categorias, obtenerCategorias, mensaje} = categoriasContext;

    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;

    useEffect(() => {
        if(categoria == null){
            obtenerCategorias();
        }
        // eslint-disable-next
    },[categoria])

     useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    }, [mensaje])
   
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
        {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
        <br/>
        <div className="listado-container">
            <ul className="listado">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria = {categoria}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

export default ListadoCategoria
