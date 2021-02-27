import React,{useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import imagen from '../../question1.svg';
import Layout from '../../components/layout/Layout'
import categoriaContext from '../../context/categorias/categoriaContext'
import alertaContext from '../../context/alertas/alertaContext'

const NuevaCategoria = () => {
    const history= useHistory()

    const categoriasContext = useContext(categoriaContext);
    const {mensaje, agregarCategoria} = categoriasContext;

    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas; 

    const [categoria, setCategoria] = useState({
        nombre: ''
    });

    const {nombre} = categoria;

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    }, [mensaje])
   
    const onChange = e => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }
    const submitCategoria = e => {
        e.preventDefault();
        agregarCategoria(categoria);
        
        setCategoria({
            nombre: ''
        })
        if(nombre.length > 0) {
            history.push('/listado-categoria');
        }
    }
    return (
        <>
        <Layout/>
        <div className="container">
            <div className="contenedor-form">
                <h1>Nueva Categoría</h1>
                <form 
                    onSubmit={submitCategoria}
                    className="form"
                >
                    <div>
                        <label htmlFor="nombre">Nombre de Categoría:</label>
                        <input 
                            type="text" 
                            name="nombre"
                            id="nombre"
                            className="form-input"
                            placeholder="Categoría"
                            value={nombre}
                            onChange={onChange}
                            />
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="boton-submit"
                            value="Agregar Categoría"/>
                    </div>
                        {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
                </form>
            </div>
            <div>
                <img 
                    src={imagen}
                    alt="question"
                    className="imagen-div"
                    />
            </div>
        </div>
        </>
    )
}

export default NuevaCategoria
