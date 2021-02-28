import React, {useContext, useEffect} from 'react'
import Layout from '../layout/Layout'
import Persona from './Persona'
import personaContext from '../../context/personas/personaContext'
import libroContext from '../../context/libros/libroContext'
import alertaContext from '../../context/alertas/alertaContext'

const ListadoPersona = () => {
    const personasContext = useContext(personaContext);
    const {persona,personas, obtenerPersonas, mensaje} = personasContext;

    const librosContext = useContext(libroContext)
    const { obtenerLibros } = librosContext;

    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;
    
    useEffect(() => {
        obtenerPersonas();
        obtenerLibros();
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    },[persona, mensaje])

    return (
        <>
        <Layout/>
        <div className="text-titulo">
            <h1>Listado de Personas</h1>
            <div className="alerta-container">
                {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
            </div>
        </div>
            <table className="tabla-persona"> 
                <thead className="tabla-head" >
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Alias</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>Libros</th>
                    </tr>
                </thead>
                    {personas.map(persona => (
                        <Persona
                            key = {persona.id}
                            persona = {persona}
                        />
                    ))}
            </table>
        </>
    )
}

export default ListadoPersona
