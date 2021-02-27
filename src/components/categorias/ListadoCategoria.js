import React, {useContext, useEffect} from 'react'
import Layout from '../../components/layout/Layout'
import Categoria from './Categoria'
import categoriaContext from '../../context/categorias/categoriaContext'

const ListadoCategoria = () => {
    const categoriasContext = useContext(categoriaContext);
    const {categoria,categorias, obtenerCategorias} = categoriasContext;

    useEffect(() => {
        if(categoria == null){
            obtenerCategorias();
        }
        // eslint-disable-next
    },[categoria])
   
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
