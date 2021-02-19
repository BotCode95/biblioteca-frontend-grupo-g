import React, {useContext, useEffect} from 'react'
import Layout from '../../components/layout/Layout'
import Categoria from './Categoria'
import categoriaContext from '../../context/categorias/categoriaContext'


const ListadoCategoria = () => {
    const categoriasContext = useContext(categoriaContext);
    const {categorias, obtenerCategorias} = categoriasContext;
    // parar el effect
    useEffect(() => {
        obtenerCategorias();
    })

    // if(categorias.length === 0) return <p>No hay categorias, podes crear una</p>
    return (
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Categorias</h1>
        <div className="listado-container">
            <ul className="listado">
                {categorias.map(categoria => (
                    <Categoria
                        categoria = {categoria}
                    />
                ))}
            </ul>
        </div>
        </>
        
    )
}

export default ListadoCategoria
