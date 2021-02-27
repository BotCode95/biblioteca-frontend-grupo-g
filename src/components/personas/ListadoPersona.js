import React, {useContext, useEffect} from 'react'
import Layout from '../layout/Layout'
import Persona from './Persona'
import personaContext from '../../context/personas/personaContext'
import libroContext from '../../context/libros/libroContext'
import alertaContext from '../../context/alertas/alertaContext'

const ListadoPersona = () => {
    const personasContext = useContext(personaContext);
    const {mensaje, persona, personas, obtenerPersonas} = personasContext;

    const librosContext = useContext(libroContext)
    const { obtenerLibros } = librosContext;

    const alertas = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertas;
    
    useEffect(() => {
        obtenerPersonas();
        obtenerLibros();
    },[persona])

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.mensaje, mensaje.tipo)
        }
    }, [mensaje])

    return (
        <>
        <Layout/>
        <div className="text-titulo">
            <h1>Listado de Personas</h1>
            {alerta ? (<div className={`alerta ${alerta.tipo}`}>{alerta.mensaje}</div>) : null}
            <br/>
        </div>
            <table className="tabla-persona">
                <thead >
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
